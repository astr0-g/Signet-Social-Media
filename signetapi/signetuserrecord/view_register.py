import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from signetuserrecord.models import Profile
from signetuserrecord.serializers import ProfileSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tokenurl.serializers import TokenURLSerializer
import random
from PIL import Image
import time
import hashlib


@api_view(["POST"])
def api_register(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        timenow = int(time.time())
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            userId = data['userId']
            useraddress = data['userAddress']
            signatrue = data['userSignatrue']
            record = data['userRecord']
            userRegisteredtime = data['userRegisteredtime']
            if len(useraddress):
                information = Profile.objects.filter(id=userId)
                n = 0
                for i in information:
                    n += 1
                print(n)
                if n == 0:
                    data = serializer.data
                    Profile.objects.filter(id=userId).get_or_create(id=userId,
                                                                    userId=userId, userAddress=useraddress, userSignatrue=signatrue, userRecord=record, userRegisteredtime=userRegisteredtime)
                    return Response("success", status=200)
                elif n != 0:
                    information = Profile.objects.filter(
                        userAddress=useraddress)
                    for i in information:
                        oldclinet = ProfileSerializer(i).data
                        a = random.randint(400, 1900)
                        if oldclinet['userRecord'][1:a] == record[1:a]:
                            string1 = str(timenow)[0:9]
                            result1 = tohash(string1)
                            string2 = str(int(str(timenow)[0:9])+1)
                            result2 = tohash(string2)
                            if result1 == record[1934:1966] or result2 == record[1934:1966]:
                                Profile.objects.filter(id=userId).update(
                                    userId=userId, userAddress=useraddress, userSignatrue=signatrue, userRecord=record)
                                return Response("success", status=200)
                            else:
                                return Response("failed", status=200)
                        else:
                            return Response("failed", status=200)
                else:
                    return Response("registered", status=200)
            else:
                return Response("failed", status=200)


def tohash(string):
    hl = hashlib.md5()
    hl.update(string.encode(encoding='latin1'))
    hashed = hl.hexdigest()
    return hashed
