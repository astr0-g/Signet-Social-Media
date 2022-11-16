# Generated by Django 3.2.13 on 2022-10-22 00:12

from django.db import migrations, models
import tokenurl.models


class Migration(migrations.Migration):

    dependencies = [
        ('tokenurl', '0002_tokenurl_idnum'),
    ]

    operations = [
        migrations.AddField(
            model_name='tokenurl',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=tokenurl.models.TokenURL.images),
        ),
    ]
