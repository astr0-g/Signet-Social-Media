from django.db import models

# Create your models here.


class notifications(models.Model):
    typeOfNotification = models.TextField(blank=False, null=False)
    messageId = models.TextField(blank=True, null=False)
    userRecived = models.TextField(blank=True, null=True)
    userSend = models.TextField(blank=True, null=True)
    viewd = models.BooleanField(blank=True, null=True)
    time = models.TextField(blank=True, null=True)
