# Generated by Django 5.2 on 2025-04-15 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mod_manager', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscribetask',
            name='status',
            field=models.IntegerField(),
        ),
    ]
