import uuid
from django.db import models

# Create your models here.


class SubscribeTask(models.Model):
    task_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    download_progress = models.IntegerField(default=0)
    status = models.CharField(max_length=255, default='init')
    message = models.TextField(default='')

    def __str__(self):
        return self.task_id

    def __repr__(self):
        return self.task_id

