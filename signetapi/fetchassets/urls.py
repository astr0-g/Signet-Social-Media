from django.urls import path

from . import views


urlpatterns = [
    path('assets/<address>/<chain>/<startnum>/<endnum>/', views.api_fetch),
    path('number/<address>/<chain>/', views.api_number),
]
