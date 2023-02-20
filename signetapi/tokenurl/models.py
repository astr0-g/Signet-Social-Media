from django.db import models

# Create your models here.


class TokenURL(models.Model):
    def images(instance, filename):
        return '/'.join(['token',  filename])
    description = models.TextField(blank=True, null=True)
    imageurl = models.TextField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True, upload_to=images)
