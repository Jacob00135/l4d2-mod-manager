# Generated by Django 5.2 on 2025-04-15 23:15

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SubscribeTask',
            fields=[
                ('task_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('progress', models.IntegerField()),
                ('status', models.CharField(max_length=50)),
            ],
        ),
    ]
