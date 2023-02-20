from django.urls import path


from . import views
from . import views1
from . import views2


urlpatterns = [
    path('fo/', views.api_follow),
    path('unfo/', views.api_unfollow),
    path('following/<address>/', views1.following_home),
    path('follower/<address>/', views1.followers_home),
    path('searchfollowingbyaddress/<useraddress>/<followingdaddress>/',
         views2.following_home_address),
    path('searchfollowingbyname/<useraddress>/<name>/',
         views2.following_home_name),
    path('searchfollowerbyaddress/<useraddress>/<followeraddress>/',
         views2.followers_home_address),
    path('searchfollowerbyname/<useraddress>/<name>/',
         views2.followers_home_name),
]
