from rest_framework import serializers

from .models import Signet


class SignetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signet
        fields = [
            'messageSender',
            'signetoraddress',
            'messageId',
            'tokenURI',
            'time',
        ]
