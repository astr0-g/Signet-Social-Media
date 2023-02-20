from unittest.util import _MAX_LENGTH
from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.


class Profile(models.Model):
    userId = models.IntegerField(blank=False, null=False)
    userAddress = models.TextField(blank=False, null=False, validators=[
        MinLengthValidator(40, 'the field must contain at least 40 characters')
    ])
    userName = models.TextField(blank=True, null=True, max_length=15)
    userBio = models.TextField(blank=True, null=True)
    userPfp = models.TextField(blank=True, null=True)
    userSignatrue = models.TextField(blank=False, null=False)
    userRecord = models.TextField(blank=False, null=False, validators=[
        MinLengthValidator(
            1960, 'the field must contain at least 2 characters')
    ])
    userIpaddress = models.TextField(blank=True, null=True)
    userRegisteredtime = models.TextField(blank=True, null=True)
