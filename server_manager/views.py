from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from mod_manager.views import login_required
from .models import OperationInfo
from .utils import read_server_log, start_l4d2_server, stop_l4d2_server, change_coop_level


@login_required
def index(request):
    info = OperationInfo.get_last_info()
    if info is None:
        operation_info = {
            'status': '已停止',
            'start_time': '',
            'stop_time': ''
        }
    else:
        operation_info = {
            'status': '正在运行' if info.status == 'running' else '已停止',
            'start_time': info.start_time,
            'stop_time': info.stop_time
        }

    return render(request, 'server_manager/index.html', {
        'operation_info': operation_info
    })


@login_required
def get_server_log(request):
    if request.method != 'GET':
        return JsonResponse({'success': 0, 'message': '不支持的请求方式'})

    try:
        log = read_server_log(settings.L4D2_SCREEN_LOG_PATH)
    except Exception as e:
        return JsonResponse({'success': 0, 'log': str(e)})

    return JsonResponse({'success': 1, 'log': log})


@login_required
def start_server(request):
    if request.method != 'POST':
        return JsonResponse({'success': 0, 'message': '不支持的请求方式'})

    if OperationInfo.objects.filter(status='running'):
        return JsonResponse({'success': 0, 'log': '服务正在运行！'})

    result = start_l4d2_server(
        session_name=settings.L4D2_SCREEN_SESSION_NAME,
        log_path=settings.L4D2_SCREEN_LOG_PATH,
        start_script_path=settings.L4D2_SERVER_START_SCRIPT_PATH
    )

    if result['success'] == 0:
        return JsonResponse({
            'success': 0,
            'log': '\n'.join([result['output'], result['error']])
        })

    OperationInfo(status='running').save()

    return JsonResponse({
        'success': 1,
        'log': '启动成功！请刷新页面查看服务器日志'
    })


@login_required
def stop_server(request):
    if request.method != 'POST':
        return JsonResponse({'success': 0, 'log': '不支持的请求方式'})

    info_set = OperationInfo.objects.filter(status='running')
    if not info_set:
        return JsonResponse({'success': 0, 'log': '服务未运行！'})

    result = stop_l4d2_server(
        rcon_host='127.0.0.1',
        rcon_port=settings.L4D2_SERVER_RCON_PORT,
        rcon_password=settings.L4D2_SERVER_RCON_PASSWORD,
        session_name=settings.L4D2_SCREEN_SESSION_NAME
    )

    if result['success'] == 0:
        return JsonResponse({
            'success': 0,
            'log': '\n'.join([result['output'], result['error']])
        })

    return JsonResponse({
        'success': 1,
        'log': '停止成功！请刷新页面查看服务器日志'
    })


@login_required
def changelevel(request):
    if request.method != 'POST':
        return JsonResponse({'success': 0, 'log': '不支持的请求方式'})

    chapter_code = request.POST.get('chapter-code')
    if chapter_code is None:
        return JsonResponse({'success': 0, 'log': '缺少chapter-code参数'})

    result = change_coop_level(
        rcon_host='127.0.0.1',
        rcon_port=settings.L4D2_SERVER_RCON_PORT,
        rcon_password=settings.L4D2_SERVER_RCON_PASSWORD,
        chapter_code=chapter_code
    )

    if result['success'] == 0:
        return JsonResponse({
            'success': 0,
            'log': '\n'.join([result['output'], result['error']])
        })

    return JsonResponse({
        'success': 1,
        'log': '换图成功！请刷新页面查看服务器日志'
    })

