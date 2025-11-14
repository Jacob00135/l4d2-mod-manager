from django.urls import path
from . import views

app_name = 'mod_manager'
urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('delete_mod/', views.delete_mod, name='delete_mod'),
    path('subscribe_mod/', views.subscribe_mod, name='subscribe_mod'),
    path('get_subscribe_progress/', views.get_subscribe_progress, name='get_subscribe_progress'),
    path('upload_file/', views.upload_file, name='upload_file'),
    path('file_exist/', views.file_exist, name='file_exist'),
    path('get_sha256_code/', views.get_sha256_code, name='get_sha256_code'),
    path('change_max_page_mod_number/', views.change_max_page_mod_number, name='change_max_page_mod_number'),
]
