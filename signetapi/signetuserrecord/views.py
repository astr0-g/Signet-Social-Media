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
# def api_add(request):
def api_pf(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        serializer = ProfileSerializer(data=request.data)
        print("1")
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            useraddress = data['userAddress']
            userName = data['userName']
            userPfp = data['userPfp']
            if userName != None:
                Profile.objects.filter(
                    userAddress=useraddress).update(userName=userName)
                return Response("updated1", status=200)
            elif userPfp != None:
                Profile.objects.filter(
                    userAddress=useraddress).update(userPfp=userPfp)
                return Response("updated2", status=201)
            return Response("error2", status=201)
        return Response("error1", status=200)
    else:
        return Response({"success"}, status=490)


@api_view(["POST"])
def api_bio(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    timenow = int(time.time())
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        useraddress = data['userAddress']
        record = data['userRecord']
        userBio = data['userBio']
        if len(useraddress):
            information = Profile.objects.filter(userAddress=useraddress)
            n = 0
            for i in information:
                n += 1
            if n == 1:
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
                            Profile.objects.filter(id=oldclinet['userId']).update(
                                userBio=userBio, userIpaddress=ip)
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
