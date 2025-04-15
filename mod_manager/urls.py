from django.urls import path
from . import views

app_name = 'mod_manager'
urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('delete_mod/', views.delete_mod, name='delete_mod'),
]
