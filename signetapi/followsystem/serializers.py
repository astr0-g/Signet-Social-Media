from .models import UserFollowing
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFollowing
        fields = [
            'isfollowing',
            'isfollowed',
            'created',
        ]


# def get_following(self, obj):
#     return FollowingSerializer(obj.following.all(), many=True).data


# def get_followers(self, obj):
#     return FollowersSerializer(obj.followers.all(), many=True).data
