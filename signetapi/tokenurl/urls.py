from django.urls import path

from . import views1

from . import views


urlpatterns = [
    path('', views.api_home),
    path('read/<idnum>/',views1.api_home)
]
