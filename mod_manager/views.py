import os
from functools import wraps
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.urls import reverse
from django.conf import settings
from .utils import parse_vpk, get_disk_info

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

    if request.method == 'GET':
        return render(request, 'mod_manager/login.html')

    if request.method == 'POST':
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
    django_logout(request)
    return HttpResponseRedirect(reverse('mod_manager:login'))


@login_required
def index(request):
    mod_info = []
    for fn in os.listdir(settings.L4D2_MOD_ADDONS_PATH):
        if fn.rsplit('.', 1).pop() != 'vpk':
            continue
        vpk_info = parse_vpk(os.path.join(settings.L4D2_MOD_ADDONS_PATH, fn))
        item = {'filename': fn}
        item.update(vpk_info)
        mod_info.append(item)

    context = {
        'L4D2_MOD_ADDONS_PATH': settings.L4D2_MOD_ADDONS_PATH,
        'disk_info': get_disk_info(settings.L4D2_MOD_ADDONS_PATH),
        'mod_info': mod_info
    }

    return render(request, 'mod_manager/index.html', context)
