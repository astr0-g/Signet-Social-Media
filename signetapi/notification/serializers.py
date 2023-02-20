from .models import notifications
from rest_framework import serializers

class notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = notifications
        fields = [
            'typeOfNotification',
            'messageId',
            'userRecived',
            'userSend',
            'viewd',
            'time'
        ]
