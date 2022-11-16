from django.db import models

# Create your models here.


class UserFollowing(models.Model):
    isfollowing = models.TextField(blank=True, null=True)
    isfollowed = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, db_index=True)
