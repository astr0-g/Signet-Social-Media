import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from signetorprofile.models import Profile
from signetorprofile.serializers import ProfileSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

from tokenurl.serializers import TokenURLSerializer
import random
from PIL import Image


@api_view(["POST"])
# def api_add(request):
def api_name(request, *arg, **kwargs):
    serializer = ProfileSerializer(data=request.data)
    print("1")
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        address = data['address']
        name = data['name']
        print(name)
        if name != None:
            # profilepic = request.data['image']
            # profilepic._name = str(random.randint(
            #     10000000000000, 99999999999999))+"."+profilepic._name.split('.')[1]
            if Profile.objects.filter(name=name):
                return Response("duplicate", status=200)
            if Profile.objects.filter(address=address).update(name=name):
                Profile.objects.filter(address=address).update(name=name)
                return Response("updated", status=200)
            else:
                Profile.objects.create(
                    address=address, name=name)
                return Response("success", status=200)
        return Response("error2", status=201)
    return Response("error1", status=200)
    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')


@api_view(["POST"])
def api_pfpic(request, *arg, **kwargs):
    serializer = ProfileSerializer(data=request.data)
    print("1")
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        address = data['address']
        profilepic = request.data['profilepic']
        profilepic._name = str(random.randint(
            10000000000000, 99999999999999))+"."+profilepic._name.split('.')[1]
        if Profile.objects.filter(address=address).update(profilepic=profilepic):
            Profile.objects.filter(address=address).delete()
            Profile.objects.filter(address=address).create(address=address,
                profilepic=profilepic)
            return Response(profilepic._name, status=200)
        else:
            Profile.objects.create(
                address=address, profilepic=profilepic)
            return Response(profilepic._name, status=200)
    return Response("error", status=200)
    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
