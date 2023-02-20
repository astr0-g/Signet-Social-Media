from rest_framework import serializers

from .models import Signet


class SignetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signet
        fields = [
            'messageSender',
            'messageId',
            'tokenURI',
            'time',
            'liked',
            'stared',
            'views'
        ]
