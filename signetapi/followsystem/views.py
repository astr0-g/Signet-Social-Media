import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from followsystem.models import UserFollowing
from rest_framework.response import Response
from rest_framework.decorators import api_view
from followsystem.serializers import UserSerializer
import random
from django.shortcuts import render


@api_view(["POST"])
# def api_add(request):
def api_follow(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            isfollowing = data['isfollowing']
            isfollowed = data['isfollowed']
            if isfollowing != "":
                if isfollowed != "":
                    if isfollowing != isfollowed:
                        user = UserFollowing.objects.filter(
                            isfollowing=isfollowing)
                        for i in user:
                            data = UserSerializer(i).data
                            if data['isfollowed'] == isfollowed:
                                return Response({"error": "already followed"}, status=200)
                        UserFollowing.objects.create(isfollowing=isfollowing,
                                                     isfollowed=isfollowed)
                        return Response({"success": "true", }, status=200)
                    else:
                        return Response({"error": "same user"}, status=200)
                else:
                    return Response({"error": "null"}, status=200)
            else:
                return Response({"error": "null"}, status=200)
        else:
            return Response({"error": "error"}, status=200)
    else:
        return Response({"success": ip}, status=200)


@api_view(["POST"])
# def api_add(request):
def api_unfollow(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            isfollowing = data['isfollowing']
            isfollowed = data['isfollowed']
            if isfollowing != "":
                if isfollowed != "":
                    if isfollowing != isfollowed:
                        user = UserFollowing.objects.filter(
                            isfollowing=isfollowing)
                        for i in user:
                            data = UserSerializer(i).data
                            if data['isfollowed'] == isfollowed:
                                UserFollowing.objects.filter(isfollowing=isfollowing,
                                                             isfollowed=isfollowed).delete()
                                return Response({"success": "true"}, status=200)
                        return Response({"error": "already unfollowed"}, status=200)

                    else:
                        return Response({"error": "same user"}, status=200)
                else:
                    return Response({"error": "null"}, status=200)
            else:
                return Response({"error": "null"}, status=200)
        else:
            return Response({"error": "error"}, status=200)
    else:
        return Response({"success": ip}, status=200)
