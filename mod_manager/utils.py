import os
import vpk
import psutil
from base64 import b64encode


class VPKParser(object):

    def __init__(self, vpk_path):
        self.vpk_path = vpk_path
        self.vpk_info = {
            'type': 'mod',
            'coop_info': [],
            'name': '',
            'scription': '',
            'cover': ''
        }

    def parse(self):
        with vpk.open(self.vpk_path) as vpk_obj:
            for path in vpk_obj:
                if path.startswith('missions/'):
                    self.vpk_info['type'] = 'map'
                    missions = vpk_obj[path].read().decode()
                    self.vpk_info['coop_info'] = self.extract_missions(missions)
                elif path == 'addoninfo.txt':
                    addoninfo = vpk_obj[path].read().decode()
                    mod_name, mod_scription = self.extract_addoninfo(addoninfo)
                    self.vpk_info['name'] = mod_name
                    self.vpk_info['scription'] = mod_scription
                elif path == 'addonimage.jpg':
                    image_base64 = b64encode(vpk_obj[path].read()).decode()
                    self.vpk_info['cover'] = image_base64

    def extract_missions(self, missions):
        rows = missions.split('\n')
        coop_info = []

        # 寻找前置行
        preceding_keys = ['"modes"', '"coop"']
        preceding_index = 0
        for r, row in enumerate(rows):
            if row.lstrip().startswith(preceding_keys[preceding_index]):
                preceding_index = preceding_index + 1
                if preceding_index >= len(preceding_keys):
                    break

        # 开始提取信息
        stack = []
        for i in range(r + 1, len(rows)):
            row = rows[i]
            row_lstrip_lower = row.lstrip().lower()
            if row_lstrip_lower.startswith('{'):
                stack.append(i)
            elif row_lstrip_lower.startswith('}'):
                stack.pop()
                if not stack:
                    break
            elif row_lstrip_lower.startswith('"map"'):
                chapter_code = self.get_value_from_vpk_txt_row(row)
                coop_info.append({'chapter_code': chapter_code, 'chapter_name': ''})
            elif row_lstrip_lower.startswith('"displayname"'):
                chapter_name = self.get_value_from_vpk_txt_row(row)
                coop_info[-1]['chapter_name'] = chapter_name

        return coop_info

    def extract_addoninfo(self, addoninfo):
        rows = addoninfo.split('\n')
        mod_name = ''
        mod_scription = ''

        for row in rows:
            row_lstrip_lower = row.lstrip().lstrip('"').lower()
            if row_lstrip_lower.startswith('addontitle'):
                mod_name = self.get_value_from_vpk_txt_row(row)
            elif row_lstrip_lower.startswith('addondescription'):
                mod_scription = self.get_value_from_vpk_txt_row(row)

        return mod_name, mod_scription

    @staticmethod
    def get_value_from_vpk_txt_row(row):
        # 寻找值的起始位置
        preceding_functions = [
            lambda c: not c.isspace(),
            lambda c: c.isspace(),
            lambda c: (not c.isspace()) and c != '"'
        ]
        preceding_length = len(preceding_functions)
        preceding_index = 0
        start = 0
        row_length = len(row)
        while start < row_length and preceding_index < preceding_length:
            if preceding_functions[preceding_index](row[start]):
                preceding_index = preceding_index + 1
            start = start + 1
        # start = start - 1

        # 寻找值的末尾位置
        for end in range(start, len(row)):
            if row[end] == '"':
                break

        return row[start - 1:end]


def format_disk_unit(num):
    unit_list = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB', 'NB']
    i = 0
    while num >= 1024:
        num = num / 1024
        i = i + 1

    return '{:.2f} {}'.format(num, unit_list[i])


def get_all_mod_info(addons_path, sort=False):
    all_mod_info = []
    for fn in os.listdir(addons_path):
        if fn.rsplit('.', 1).pop() != 'vpk':
            continue

        mod_path = os.path.join(addons_path, fn)
        mod_info = {
            'filename': fn,
            'file_size_byte': os.stat(mod_path).st_size
        }
        mod_info['file_size'] = format_disk_unit(mod_info['file_size_byte'])
        parser = VPKParser(mod_path)
        parser.parse()
        mod_info.update(parser.vpk_info)
        all_mod_info.append(mod_info)

    if sort:
        mod_info_dict = {
            'mod': [],
            'map': []
        }
        for mod_info in all_mod_info:
            mod_info_dict[mod_info['type']].append(mod_info)
        mod_type = sorted(mod_info_dict['mod'], key=lambda d: d['file_size_byte'], reverse=True)
        map_type = sorted(mod_info_dict['map'], key=lambda d: d['file_size_byte'], reverse=True)
        all_mod_info = map_type + mod_type

    return all_mod_info


def get_disk_info(path):
    disk_info = psutil.disk_usage(path)

    return {
        'used': format_disk_unit(disk_info.used),
        'total': format_disk_unit(disk_info.total),
        'percent': '{:.2%}'.format(disk_info.used / disk_info.total)
    }


def check_filename_legality(filename):
    if len(filename) > 255:
        return False

    illegal_chars = '\\/:*?"<>|\0'
    for c in illegal_chars:
        if c in filename:
            return False

    return True
