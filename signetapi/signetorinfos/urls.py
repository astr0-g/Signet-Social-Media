from django.urls import path

from . import views1
from . import views2
from . import views3
from . import views


urlpatterns = [
    path('', views.api_home),
    path('read/<signetorowneraddress>/', views1.api_home),
    path('all/', views2.api_home),
    path('followby/<signetorowneraddress>/', views3.api_home),
]
