# Generated by Django 3.2.13 on 2023-01-11 06:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signetuserrecord', '0002_auto_20230110_1622'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='userAddress',
            field=models.TextField(default=123, validators=[django.core.validators.MinLengthValidator(40, 'the field must contain at least 40 characters')]),
            preserve_default=False,
        ),
    ]
