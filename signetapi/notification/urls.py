from django.urls import path

from . import views1
from . import views


urlpatterns = [
    path('post/', views.api_noti_post),
    path('number/<address>/', views1.number_home),
    path('read/<address>/<startnum>/<endnum>/', views1.read_home),
]
