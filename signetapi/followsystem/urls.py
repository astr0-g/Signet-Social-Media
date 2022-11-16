from django.urls import path

from . import views1
from . import views


urlpatterns = [
    path('fo/', views.api_follow),
    path('unfo/', views.api_unfollow),
    path('following/<address>/', views1.following_home),
    path('follower/<address>/', views1.followers_home),
]
