from .models import Comments
from rest_framework import serializers

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = [
            'userAddress',
            'messageId',
            'comments',
            'created_on',
        ]
