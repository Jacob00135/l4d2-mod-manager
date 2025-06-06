import re
import datetime
import subprocess
from rcon.source import Client as SourceRconClient
from .models import OperationInfo


def read_server_log(log_path):
    with open(log_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    pattern = re.compile(r'\x1b\[[0-?]*[ -/]*[@-~]')
    content = pattern.sub('', content)

    return content


def get_screen_session_name():
    """
    screen -ls
    """
    args = ['screen', '-ls']
    result = subprocess.run(args, capture_output=True, text=True)
    if result.stderr:
        return {'success': 0, 'output': result.stdout, 'error': result.stderr}

    session_name_list = []
    func_list = [
        lambda c: c.isspace(),
        lambda c: c in '0123456789',
        lambda c: c == '.'
    ]
    for row in result.stdout.split('\n'):
        i = 0
        func_index = 0
        while i < len(row) and func_index < len(func_list):
            if func_list[func_index](row[i]):
                func_index = func_index + 1
            i = i + 1
        if i >= len(row):
            continue
        start = i
        while i < len(row) and not row[i].isspace():
            i = i + 1
        session_name_list.append(row[start:i])

    return {'success': 1, 'output': session_name_list, 'error': ''}


def screen_session_exist(session_name):
    result = get_screen_session_name()
    if result['success'] == 0:
        return result
    return {
        'success': 1,
        'output': session_name in result['output'],
        'error': ''
    }


def start_l4d2_server(session_name, log_path, start_script_path):
    # 检查会话是否存在
    func_result = screen_session_exist(session_name)
    if func_result['success'] == 0:
        return func_result
    if func_result['output']:
        return {'success': 0, 'output': '', 'error': '服务会话已存在！'}

    # 清空会话日志
    with open(log_path, 'w') as f:
        f.write('')

    # 创建新会话
    """
    screen -dmL -t l4d2 -S l4d2
    """
    args = ['screen', '-dmL', '-t', session_name, '-S', session_name]
    result = subprocess.run(args, capture_output=True, text=True)
    if result.returncode != 0:
        return {'success': 0, 'output': result.stdout, 'error': result.stderr}

    # 启动求生服务
    """
    screen -S l4d2 -X stuff "bash /path/to/run_l4d2_server.sh$(printf '\\015')"
    """
    args = [
        'screen',
        '-S', session_name,
        '-X', 'stuff',
        'bash {}\n'.format(start_script_path)
    ]
    result = subprocess.run(args, capture_output=True, text=True)

    # 检查会话是否存在
    func_result = get_screen_session_name()
    if func_result['success'] == 0:
        return func_result
    if not func_result['output']:
        return {
            'success': 0,
            'output': '',
            'error': '未知错误，无法创建screen会话\n{}\n{}'.format(result.stdout, result.stderr)
        }

    return {'success': 1, 'output': result.stdout, 'error': result.stderr}


def stop_l4d2_server(rcon_host, rcon_port, rcon_password, session_name):
    # 检查会话是否存在
    func_result = screen_session_exist(session_name)
    if func_result['success'] == 0:
        return func_result
    if not func_result['output']:
        return {'success': 0, 'output': '', 'error': '会话不存在！'}

    try:
        with SourceRconClient(rcon_host, rcon_port, passwd=rcon_password, timeout=5) as client:
            response = client.run('quit')
    except Exception as e:
        return {'success': 0, 'output': '', 'error': str(e)}

    if response:
        return {'success': 0, 'output': '', 'error': response}

    for info in OperationInfo.objects.filter(status='running'):
        info.status = 'stopped'
        info.stop_time = datetime.datetime.now()
        info.save()

    """
    screen -S l4d2 -X quit
    """
    args = ['screen', '-S', session_name, '-X', 'quit']
    result = subprocess.run(args, capture_output=True, text=True)

    # 检查会话是否存在
    func_result = screen_session_exist(session_name)
    if func_result['success'] == 0:
        return func_result
    if func_result['output']:
        return {
            'success': 0,
            'output': '',
            'error': '未知错误，无法关闭screen会话\n{}\n{}'.format(result.stdout, result.stderr)
        }

    return {'success': 1, 'output': result.stdout, 'error': result.stderr}


def change_coop_level(rcon_host, rcon_port, rcon_password, chapter_code):
    try:
        with SourceRconClient(rcon_host, rcon_port, passwd=rcon_password, timeout=5) as client:
            response = client.run('changelevel {}'.format(chapter_code))
    except Exception as e:
        return {'success': 0, 'output': '', 'error': str(e)}

    if response:
        return {'success': 0, 'output': '', 'error': response}

    return {'success': 1, 'output': '', 'error': ''}

