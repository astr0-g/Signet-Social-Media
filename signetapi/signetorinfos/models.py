from django.db import models

# Create your models here.


class Signet(models.Model):
    messageSender = models.TextField(blank=True, null=True)
    messageId = models.TextField(blank=True, null=True)
    tokenURI = models.TextField(blank=True, null=True)
    time = models.TextField(blank=True, null=True)
    liked = models.IntegerField(blank=False, null=False)
    stared = models.IntegerField(blank=False, null=False)
    views = models.IntegerField(blank=False, null=False)
