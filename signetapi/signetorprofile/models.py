from unittest.util import _MAX_LENGTH
from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.


class Profile(models.Model):
    def images(instance, filename):
        return '/'.join(['images',  filename])
    address = models.TextField(blank=True, null=True, validators=[
        MinLengthValidator(40, 'the field must contain at least 40 characters')
    ])
    name = models.TextField(blank=True, null=True, max_length=12)
    profilepic = models.ImageField(blank=True, null=True, upload_to=images)
