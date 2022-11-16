import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from signetorinfos.models import Signet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from signetorinfos.serializers import SignetSerializer
import random


@api_view(["POST"])
# def api_add(request):
def api_home(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64":
        serializer = SignetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            messageSender = data['messageSender']
            signetoraddress = data['signetoraddress']
            messageId = data['messageId']
            tokenURI = data['tokenURI']
            time = data['time']
            Signet.objects.create(
                messageSender=messageSender, signetoraddress=signetoraddress, messageId=messageId, tokenURI=tokenURI, time=time)
            return Response({"success": "true"}, status=200)
        else:
            return Response({"success": "false"}, status=490)
    else:
        return Response({"success": ip}, status=490)
    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
