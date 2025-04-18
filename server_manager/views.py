from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from mod_manager.views import login_required
from .models import OperationInfo


# Create your views here.


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
    try:
        with open(settings.L4D2_SCREEN_LOG_PATH, 'r') as f:
            content = f.read()
    except Exception as e:
        return JsonResponse({'success': 0, 'log': str(e)})

    return JsonResponse({'success': 1, 'log': content})

