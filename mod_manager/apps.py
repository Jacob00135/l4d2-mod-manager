from django.apps import AppConfig
from django.conf import settings


class ModManagerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mod_manager'

    def ready(self):
        """自动创建管理员"""
        from django.contrib.auth.models import User

        username = settings.L4D2_MOD_MANAGER_ADMIN_USERNAME
        user = User.objects.filter(username=username)
        if not user:
            password = settings.L4D2_MOD_MANAGER_ADMIN_PASSWORD
            user = User.objects.create_user(username=username, password=password)
            user.save()
