import os
from functools import wraps
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.urls import reverse
from django.conf import settings
from .models import SubscribeTask
from .utils import get_all_mod_info, get_disk_info, check_filename_legality, SubscribeMod

# Create your views here.


def login_required(view_func):
    @wraps(view_func)
    def decorator_func(*args, **kwargs):
        request = args[0]
        if request.user.is_authenticated:
            return view_func(*args, **kwargs)
        else:
            redirect_route = reverse('mod_manager:login') + '?next=' + request.path
            return HttpResponseRedirect(redirect_route)
    return decorator_func


def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('mod_manager:index'))

    if request.method != 'POST':
        return render(request, 'mod_manager/login.html')

    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = authenticate(request, username=username, password=password)

    if user is None:
        return HttpResponseRedirect(reverse('mod_manager:login'))

    django_login(request, user)
    next = request.GET.get('next', reverse('mod_manager:index'))

    return HttpResponseRedirect(next)


@login_required
def logout(request):
    if request.method != 'POST':
        return HttpResponseRedirect(reverse('mod_manager:index'))

    django_logout(request)
    return HttpResponseRedirect(reverse('mod_manager:login'))


@login_required
def index(request):
    context = {
        'L4D2_MOD_ADDONS_PATH': settings.L4D2_MOD_ADDONS_PATH,
        'disk_info': get_disk_info(settings.L4D2_MOD_ADDONS_PATH),
        'all_mod_info': get_all_mod_info(settings.L4D2_MOD_ADDONS_PATH, sort=True)
    }

    return render(request, 'mod_manager/index.html', context)


@login_required
def delete_mod(request):
    filename = request.POST.get('filename', '')
    mod_path = os.path.join(settings.L4D2_MOD_ADDONS_PATH, filename)

    if request.method == 'POST' and check_filename_legality(filename) and os.path.exists(mod_path):
        try:
            os.remove(mod_path)
        except Exception as e:
            print(e)

    return HttpResponseRedirect(reverse('mod_manager:index'))


@login_required
def subscribe_mod(request):
    if request.method != 'POST':
        return render(request, 'mod_manager/subscribe-mod.html')

    subscribe_url = request.POST.get('subscribe_url', '')
    smobj = SubscribeMod(subscribe_url, settings.L4D2_MOD_ADDONS_PATH)
    smobj.start()

    return JsonResponse({
        'success': 1,
        'message': '创建订阅任务成功',
        'task_id': smobj.st.task_id
    })


@login_required
def get_subscribe_progress(request):
    if request.method != 'GET':
        return HttpResponseRedirect(reverse('mod_manager:index'))

    task_id = request.GET.get('task_id', '')
    try:
        st = SubscribeTask.objects.get(pk=task_id)
    except SubscribeTask.DoesNotExist:
        return JsonResponse({'success': 0, 'message': 'task_id不存在！'})

    return JsonResponse({
        'success': 1,
        # 'message': '成功获取订阅日志',
        # 'task_id': st.task_id,
        'status': st.status,
        'message': st.message,
        'download_progress': st.download_progress
    })


@login_required
def upload_mod(request):
    if request.method != 'POST':
        return render(request, 'mod_manager/upload-mod.html')

    f = request.FILES.get('file')
    if f is None:
        return JsonResponse({'success': 0, 'message': '未上传文件'})
    print('-' * 80)
    print([f])
    print([f.name])
    print([f.size])
    print('-' * 80)
    save_path = os.path.join(settings.L4D2_MOD_ADDONS_PATH, f.name)
    if os.path.exists(save_path):
        return JsonResponse({'success': 0, 'message': '文件已存在！'})

    with open(save_path, 'wb') as save_f:
        for chunk in f.chunks():
            save_f.write(chunk)

    return JsonResponse({'success': 1, 'message': '成功保存文件'});


@login_required
def file_exist(request):
    if request.method != 'GET':
        return HttpResponseRedirect(reverse('mod_manager:index'))

    filename = request.GET.get('filename')
    if filename is None:
        return JsonResponse({'success': 0, 'message': '缺少查询字符串filename'})

    if not check_filename_legality(filename):
        return JsonResponse({'success': 0, 'message': '不合法的文件名'})

    if filename.rsplit('.', 1).pop() != 'vpk':
        return JsonResponse({'success': 0, 'message': '必须是vpk文件'})

    mod_path = os.path.join(settings.L4D2_MOD_ADDONS_PATH, filename)
    exist = int(os.path.exists(mod_path))

    return JsonResponse({'success': 1, 'exist': exist})
