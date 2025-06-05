import uuid
import datetime
from django.db import models


class SubscribeTask(models.Model):
    task_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    mod_id = models.TextField(default='', null=False)
    steam_workshop_link = models.TextField(default='', null=False)
    mod_title = models.TextField(default='', null=False)
    mod_link = models.TextField(default='', null=False)
    download_progress = models.IntegerField(default=0, null=False)
    log = models.TextField(default='', null=False)
    finish = models.IntegerField(default=0, null=False)
    subscribe_date = models.DateTimeField(default=datetime.datetime.now, null=False)

    def __str__(self):
        return str(self.task_id)

    def __repr__(self):
        return str(self.task_id)

