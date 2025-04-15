import os
import json
import vpk
from base64 import b64encode


def get_value_from_vpk_txt_row(row):
    for i in range(len(row) - 1):
        if row[i:i + 2] == '//':
            row = row[:i]
            break
    return row.strip().strip('"')


def extract_coop_info(missions_info):
    coop_info = []
    rows = missions_info.split('\r\n')
    stack = []
    j = 0
    for i, row in enumerate(rows):
        row_strip = row.strip().lower()
        if j == 0 and row_strip == '"modes"':
            j = 1
            continue
        if j == 1 and row_strip == '"coop"':
            j = 2
            continue
        if j == 2 and row_strip == '{':
            stack.append(i)
            j = 3
            continue
        if j != 3:
            continue
        if row_strip == '{':
            stack.append(i)
        elif row_strip == '}':
            stack.pop()
            if not stack:
                break
        elif row_strip.startswith('"map"'):
            code = get_value_from_vpk_txt_row(row_strip[len('"map"'):])
            coop_info.append({'code': code})
        elif row_strip.startswith('"displayname"'):
            display_name = get_value_from_vpk_txt_row(row_strip[len('"displayname"'):])
            coop_info[-1]['display_name'] = display_name

    return coop_info


def extract_addontitle(addoninfo):
    rows = addoninfo.split('\n')
    for row in rows:
        row_strip = row.strip().lower()
        if row_strip.startswith('addontitle'):
            return get_value_from_vpk_txt_row(row_strip[len('addontitle'):])

    return ''


def parse_vpk(vpk_path):
    vpk_info = {'type': 'mod', 'name': '', 'cover': '', 'coop_info': []}
    with vpk.open(vpk_path) as vpk_obj:
        for path in vpk_obj:
            if path.startswith('missions/'):
                vpk_info['type'] = 'map'
                vpk_info['coop_info'] = extract_coop_info(vpk_obj[path].read().decode())
            elif path == 'addonimage.jpg':
                vpk_info['cover'] = b64encode(vpk_obj[path].read()).decode()
            elif path == 'addoninfo.txt':
                vpk_info['name'] = extract_addontitle(vpk_obj[path].read().decode())

    return vpk_info
