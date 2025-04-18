import datetime
from django.db import models

# Create your models here.


class OperationInfo(models.Model):
    status = models.CharField(max_length=32)
    start_time = models.DateTimeField(default=datetime.datetime.now)
    stop_time = models.DateTimeField(null=True)

    @staticmethod
    def get_last_info():
        info_set = OperationInfo.objects.filter(status='running').order_by('-start_time')
        if info_set:
            return info_set[0]

        info_set = OperationInfo.objects.filter(status='stopped').order_by('-stop_time')
        if info_set:
            return info_set[0]

        return None

    def __str__(self):
        return self.status

    def __repr__(self):
        return self.status

