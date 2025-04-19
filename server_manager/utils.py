import re
import subprocess


def read_server_log(log_path):
    with open(log_path, 'r') as f:
        content = f.read()
    pattern = re.compile(r'\x1b\[[0-?]*[ -/]*[@-~]')
    content = pattern.sub('', content)

    return content


def start_l4d2_server(session_name, log_path, start_script_path):
    print('-' * 80)
    number_strings = '0123456789'

    # 检查会话是否存在
    """
    screen -ls
    """
    args = ['screen', '-ls']
    result = subprocess.run(args, capture_output=True, text=True)
    print('-' * 80)
    print(result)
    print('-' * 80)
    if result.stderr:
        return {'success': 0, 'output': result.stdout, 'error': result.stderr}

    session_name_list = []
    func_list = [
        lambda c: c.isspace(),
        lambda c: c in number_strings,
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
    if session_name in session_name_list:
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
    if result.stderr:
        return {'success': 0, 'output': result.stdout, 'error': result.stderr}
    
    return {'success': 1, 'output': result.stdout, 'error': result.stderr}

