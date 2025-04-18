from django.urls import path
from . import views

app_name = 'server_manager'
urlpatterns = [
    path('', views.index, name='index'),
    path('get_server_log', views.get_server_log, name='get_server_log'),
]
