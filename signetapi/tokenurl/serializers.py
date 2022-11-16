from rest_framework import serializers

from .models import TokenURL


class TokenURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = TokenURL
        fields = [
            'idnum',
            'description',
            'imageurl',
            'image'
        ]
