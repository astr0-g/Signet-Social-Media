from django.db import models

# Create your models here.


class Signet(models.Model):
    messageSender = models.TextField(blank=True, null=True)
    signetoraddress = models.TextField(blank=True, null=True)
    messageId = models.TextField(blank=True, null=True)
    tokenURI = models.TextField(blank=True, null=True)
    time = models.TextField(blank=True, null=True)
