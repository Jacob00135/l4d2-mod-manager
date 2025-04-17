#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from django.conf import settings


def create_admin_user():
    """自动创建管理员"""
    from django.contrib.auth.models import User

    username = settings.L4D2_MOD_MANAGER_ADMIN_USERNAME
    user = User.objects.filter(username=username)
    if not user:
        password = settings.L4D2_MOD_MANAGER_ADMIN_PASSWORD
        user = User.objects.create_user(username=username, password=password)
        user.save()


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'l4d2_mod_manager.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

    # 项目之后的初始化
    create_admin_user()


if __name__ == '__main__':
    main()
