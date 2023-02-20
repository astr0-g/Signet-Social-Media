from django.http import JsonResponse
from rest_framework.response import Response
from followsystem.models import UserFollowing
from rest_framework.decorators import api_view
from followsystem.serializers import UserSerializer
from signetuserrecord.models import Profile
from signetuserrecord.serializers import ProfileSerializer
from web3 import Web3
from ens import ENS


@api_view(["GET"])
def following_home_address(request, useraddress, followingdaddress):
    try:
        try:
            infura_url = "https://mainnet.infura.io/v3/be819d15039f41ca9e45081e212d1c9a"
            ns = ENS(Web3.HTTPProvider(infura_url))
            eth_address = ns.address(followingdaddress)
            if eth_address != None:
                followingdaddress = eth_address
        except:
            pass
        following = []
        user = UserFollowing.objects.filter(
            isfollowing=useraddress, isfollowed=followingdaddress)
        for i in reversed(user):
            data = UserSerializer(i).data
            useraddress = data['isfollowed']
            following.append({
                "following": f"{useraddress}"
            })
        if len(following):
            return JsonResponse(following, safe=False, status=200)
        else:
            return Response("None", status=200)
    except:
        return Response("None", status=200)


@api_view(["GET"])
def following_home_name(request, useraddress, name):
    try:
        information = Profile.objects.filter(
            userName__contains=name)
        for i in information:
            data = ProfileSerializer(i).data
            userAddress = data['userAddress']
        following = []
        user = UserFollowing.objects.filter(
            isfollowing=useraddress, isfollowed=userAddress)
        for i in reversed(user):
            data = UserSerializer(i).data
            useraddress = data['isfollowed']
            following.append({
                "following": f"{useraddress}"
            })
        if len(following):
            return JsonResponse(following, safe=False, status=200)
        else:
            return Response("None", status=200)
    except:
        return Response("None", status=200)


@api_view(["GET"])
def followers_home_address(request, useraddress, followeraddress):
    try:
        try:
            infura_url = "https://mainnet.infura.io/v3/be819d15039f41ca9e45081e212d1c9a"
            ns = ENS(Web3.HTTPProvider(infura_url))
            eth_address = ns.address(followeraddress)
            if eth_address != None:
                followeraddress = eth_address
        except:
            pass
        followers = []
        user = UserFollowing.objects.filter(
            isfollowed=useraddress, isfollowing=followeraddress)
        for i in reversed(user):
            data = UserSerializer(i).data
            useraddress = data['isfollowing']
            followers.append({
                "follower": f"{useraddress}"
            })
        if len(followers):
            return JsonResponse(followers, safe=False, status=200)
        else:
            return Response("None", status=200)
    except:
        return Response("None", status=200)


@api_view(["GET"])
def followers_home_name(request, useraddress, name):
    try:
        information = Profile.objects.filter(
            userName__contains=name)
        for i in information:
            data = ProfileSerializer(i).data
            userAddress = data['userAddress']
        following = []
        user = UserFollowing.objects.filter(
            isfollowed=useraddress, isfollowing=userAddress)
        for i in reversed(user):
            data = UserSerializer(i).data
            useraddress = data['isfollowing']
            following.append({
                "follower": f"{useraddress}"
            })
        if len(following):
            return JsonResponse(following, safe=False, status=200)
        else:
            return Response("None", status=200)
    except:
        return Response("None", status=200)
