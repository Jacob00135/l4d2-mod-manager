import os
import time
import math
import hashlib
import vpk
import psutil
import requests
from base64 import b64encode
from urllib import parse as urllib_parse
from threading import Thread
from pyquery import PyQuery
from mod_manager.models import SubscribeTask

global_user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0'
MAX_PAGE_MOD_NUMBER = 20


def compute_file_sha256(filepath, chunk_size=4096):
    hash_sha256 = hashlib.sha256()

    with open(filepath, 'rb') as f:
        chunk = f.read(chunk_size)
        while chunk != b'':
            hash_sha256.update(chunk)
            chunk = f.read(chunk_size)

    return hash_sha256.hexdigest()


class VPKParser(object):

    def __init__(self, vpk_path):
        self.vpk_path = vpk_path
        self.vpk_info = {
            'type': 'mod',
            'coop_info': [],
            'name': '',
            'description': '',
            'cover': ''
        }

    def parse(self):
        with vpk.open(self.vpk_path) as vpk_obj:
            for path in vpk_obj:
                if path.startswith('missions/'):
                    self.vpk_info['type'] = 'map'
                    try:
                        missions = vpk_obj[path].read().decode()
                    except UnicodeDecodeError as e:
                        continue
                    self.vpk_info.update(self.extract_missions(missions))
                elif path == 'addoninfo.txt':
                    try:
                        addoninfo = vpk_obj[path].read().decode()
                    except UnicodeDecodeError as e:
                        continue
                    addoninfo_data = self.extract_addoninfo(addoninfo)
                    if self.vpk_info['name'] == '':
                        self.vpk_info['name'] = addoninfo_data['mod_name']
                    if self.vpk_info['description'] == '':
                        self.vpk_info['description'] = addoninfo_data['mod_description']
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

        # 提取每个战役章节的建图代码
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

        # 提取地图名称、地图简介
        for row in rows:
            row_lstrip_lower = row.lstrip().lstrip('"').lower()
            if row_lstrip_lower.startswith('displaytitle'):
                mod_name = self.get_value_from_vpk_txt_row(row)
            elif row_lstrip_lower.startswith('description'):
                mod_description = self.get_value_from_vpk_txt_row(row)

        return {
            'coop_info': coop_info,
            'name': mod_name,
            'description': mod_description
        }

    def extract_addoninfo(self, addoninfo):
        rows = addoninfo.split('\n')
        mod_name = ''
        mod_description = ''

        for row in rows:
            row_lstrip_lower = row.lstrip().lstrip('"').lower()
            if row_lstrip_lower.startswith('addontitle'):
                mod_name = self.get_value_from_vpk_txt_row(row)
            elif row_lstrip_lower.startswith('addondescription'):
                mod_description = self.get_value_from_vpk_txt_row(row)

        return {
            'mod_name': mod_name,
            'mod_description': mod_description
        }

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
        end = start
        for end in range(start, len(row)):
            if row[end] == '"':
                break

        return row[start - 1:end]


class SubscribeMod(Thread):
    """
    1. 获取MOD的id号
    2. 通过steamworkshop.download获取MOD文件直链
    3. 发送GET请求来下载MOD文件，并在响应头中获取文件名
    4. 以MOD在Steam创意工坊的ID来命名文件
    5. 下载文件
    """

    def __init__(self, subscribe_url, save_dir_path):
        super(SubscribeMod, self).__init__()
        self.daemon = True

        self.subscribe_url = subscribe_url
        self.save_dir_path = save_dir_path

        self.mod_id = None
        self.mod_url = None
        self.mod_title = None
        self.mod_filename = None
        self.mod_save_path = None

        self.session = requests.session()
        self.download_response = None

        self.total_size = None
        self.downloaded_size = None

        self.st = SubscribeTask()
        self.st.save()

        self.before_write_time = 0

    def create_subscribe_mission(self):
        """view: create_subscribe_mission"""
        url_obj = urllib_parse.urlparse(self.subscribe_url)
        query_dict = urllib_parse.parse_qs(url_obj.query)
        id_values = query_dict.get('id')

        if id_values is None:
            return {
                'success': 0,
                'message': '无效的订阅链接'
            }

        self.mod_id = id_values.pop()
        self.mod_filename = '{}.vpk'.format(self.mod_id)
        self.mod_save_path = os.path.join(self.save_dir_path, self.mod_filename)
        if os.path.exists(self.mod_save_path):
            return {
                'success': 0,
                'message': '订阅失败！已有同名文件：\n{}'.format(self.mod_save_path)
            }

        return {
            'success': 1,
            'message': '成功创建订阅任务'
        }

    def request_mod_url(self):
        """view: request_mod_url"""
        url = 'http://steamworkshop.download/download/view/{}'.format(self.mod_id)
        headers = {
            'Accept': '*/*',
            'Host': 'steamworkshop.download',
            # 'Referer': 'http://steamworkshop.download/',
            'Priority': 'u=0, i',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': global_user_agent
        }
        try:
            response = self.session.get(url, headers=headers, timeout=10)
            response.raise_for_status()
        except Exception as e:
            return {
                'success': 0,
                'message': '通过steamworkshop.download请求MOD文件直链失败！\n{}'.format(e)
            }

        doc = PyQuery(response.text)
        a_node = doc('#wrapper table a').eq(0)
        mod_url = a_node.attr('href')
        mod_title = a_node.attr('title')

        if mod_url is None:
            return {
                'success': 0,
                'message': '从steamworkshop.download页面提取MOD链接失败！\n{}'.format(url)
            }

        self.mod_url = mod_url
        self.mod_title = mod_title

        return {
            'success': 1,
            'message': '获取MOD文件链接成功！\n获取直链的url：{}\nMOD直链：{}\nMOD标题：{}'.format(
                url, mod_url, mod_title
            )
        }

    def request_file_headers(self):
        """view: request_file_headers"""
        headers = {
            'Accept': '*/*',
            'Host': urllib_parse.urlparse(self.mod_url).netloc,
            'Priority': 'u=0, i',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': global_user_agent
        }

        try:
            response = self.session.get(self.mod_url, headers=headers, stream=True, timeout=10)
            response.raise_for_status()
        except Exception as e:
            return {
                'success': 0,
                'message': '请求下载MOD失败！\n{}'.format(e)
            }

        self.total_size = int(response.headers.get('Content-Length'))
        if self.total_size is None:
            return {
                'success': 0,
                'message': '请求下载MOD失败！请求头异常，没有Content-Length值'
            }

        self.download_response = response
        self.downloaded_size = 0

        return {
            'success': 1,
            'message': '请求下载MOD成功！开始下载MOD，请查看下载进度条，下载路径：\n{}'.format(
                self.mod_save_path
            )
        }

    def download_mod(self, inner_function=None):
        if inner_function is None:
            inner_function = lambda: None

        try:
            with open(self.mod_save_path, 'wb') as f:
                for chunk in self.download_response.iter_content(chunk_size=1024):
                    self.downloaded_size = self.downloaded_size + f.write(chunk)
                    inner_function()
        except Exception as e:
            return {
                'success': 0,
                'message': '下载失败！\n{}'.format(e)
            }

        return {
            'success': 1,
            'message': '下载成功！订阅已完成'
        }

    def get_download_progress(self):
        return math.ceil((self.downloaded_size / self.total_size) * 100)

    def update_subscribe_task(self):
        if time.time() - self.before_write_time > 1:
            self.st.download_progress = self.get_download_progress()
            self.st.save()
            self.before_write_time = time.time()

    def run(self):
        functions = [
            self.create_subscribe_mission,
            self.request_mod_url,
            self.request_file_headers
        ]
        for f in functions:
            self.st.status = f.__name__
            self.st.save()

            response = f()
            self.st.message = self.st.message + response['message'] + '\n\n'
            if response['success'] == 0:
                self.st.status = 'end'
                self.st.save()
                return None

        self.st.status = 'download_mod'
        self.st.save()

        response = self.download_mod(inner_function=self.update_subscribe_task)
        self.st.status = 'end'
        self.st.message = self.st.message + response['message'] + '\n\n'
        self.st.download_progress = 100
        self.st.save()


def format_disk_unit(num):
    unit_list = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB', 'NB']
    i = 0
    while num >= 1024:
        num = num / 1024
        i = i + 1

    return '{:.2f} {}'.format(num, unit_list[i])


def get_all_mod_info(addons_path, page=None):
    """
    all_mod_info是保存了每个VPK文件信息的列表，列表中每个元素是mod_info，格式如下：

    mod_info = {
        'filename': 'VPK文件名',
        'file_size_byte': 'VPK文件的大小（单位为字节B）',
        'file_size': 'VPK文件的大小（单位换算为易读格式）',
        'sha256': 'VPK文件的SHA256校验码，用于检查服务器和客户端文件是否相同',
        'type': 'VPK文件对应的MOD类型，map表示地图，mod表示非地图',
        'name': '从VPK文件中提取的MOD名称',
        'scription': '从VPK文件中提取的MOD作者对于MOD的描述',
        'cover': '从VPK文件中提取的MOD封面，该值是图片的BASE64编码格式。'
                 '不是每一个VPK文件都有封面，当没有封面时，值为空',
        'coop_info': [
            {
                'chapter_name': '合作模式的每个章节的名称',
                'chapter_code': '合作模式的每个章节的控制台建图代码'
            },
            {
                'chapter_name': 'coop_info值当MOD类型是地图时，是章节信息；'
                                '当MOD类型是非地图时，是空列表',
                'chapter_code': ''
            },
        ]
    }
    """

    # 分页
    filenames = []
    for fn in os.listdir(addons_path):
        if fn[fn.rfind('.') + 1:] == 'vpk':
            filenames.append(fn)
    num_page = math.ceil(len(filenames) / MAX_PAGE_MOD_NUMBER)
    if page is not None and 0 < page <= num_page:
        start = (page - 1) * MAX_PAGE_MOD_NUMBER
        end = start + MAX_PAGE_MOD_NUMBER
        filenames = filenames[start:end]
    else:
        page = 1

    # 解析vpk
    all_mod_info = []
    for fn in filenames:
        mod_path = os.path.join(addons_path, fn)
        mod_info = {
            'filename': fn,
            'file_size_byte': os.stat(mod_path).st_size,
            #'sha256': compute_file_sha256(mod_path)
        }
        mod_info['file_size'] = format_disk_unit(mod_info['file_size_byte'])
        parser = VPKParser(mod_path)
        try:
            parser.parse()
        except Exception as e:
            mod_info.update({
                'type': 'mod',
                'name': 'vpk解析失败',
                'description': str(e),
                'cover': '',
                'coop_info': []
            })
            all_mod_info.append(mod_info)
            continue
        mod_info.update(parser.vpk_info)
        all_mod_info.append(mod_info)

    return all_mod_info, num_page, page


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

