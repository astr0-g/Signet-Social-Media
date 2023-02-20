from django.http import JsonResponse
from followsystem.models import UserFollowing
from rest_framework.decorators import api_view
from followsystem.serializers import UserSerializer


@api_view(["GET"])
def following_home(request, address):
    following = []
    user = UserFollowing.objects.filter(isfollowing=address)
    for i in reversed(user):
        data = UserSerializer(i).data
        useraddress = data['isfollowed']
        following.append({
            "following": f"{useraddress}"
        })
    return JsonResponse(following, safe=False, status=200)


@api_view(["GET"])
# def api_add(request):
def followers_home(request, address):
    followers = []
    user = UserFollowing.objects.filter(isfollowed=address)
    for i in reversed(user):
        data = UserSerializer(i).data
        useraddress = data['isfollowing']
        followers.append({
            "follower": f"{useraddress}"
        })
    return JsonResponse(followers, safe=False, status=200)

