from django.db import models

# Create your models here.


class Comments(models.Model):
    userAddress = models.TextField(blank=False, null=False)
    messageId = models.IntegerField(blank=False, null=False)
    comments = models.TextField(blank=False, null=False)
    created_on = models.TextField(blank=False, null=False)

