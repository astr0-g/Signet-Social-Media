# Generated by Django 3.2.13 on 2023-01-17 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tokenurl', '0004_remove_tokenurl_idnum'),
    ]

    operations = [
        migrations.AddField(
            model_name='tokenurl',
            name='idnum',
            field=models.TextField(blank=True, null=True),
        ),
    ]