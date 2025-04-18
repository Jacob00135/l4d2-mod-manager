from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from mod_manager.views import login_required


# Create your views here.


@login_required
def index(request):
    return render(request, 'server_manager/index.html')

