from django.urls import path

from . import views1
from . import view_register
from . import views


urlpatterns = [
    path('register/', view_register.api_register),
    path('profileupdate/', views.api_pf),
    path('bioupdate/', views.api_bio),
    path('searchaddress/<address>/', views1.api_address),
    path('searchname/<name>/<startnum>/<numbersofuser>/', views1.api_name),
]
