from django.urls import path

from . import views1

from . import views


urlpatterns = [
    path('name/', views.api_name),
    path('pfp/', views.api_pfpic),
    path('read/<address>/', views1.api_home),
]
