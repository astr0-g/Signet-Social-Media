from django.urls import path

from . import views


urlpatterns = [
    path('post/', views.api_post),
    path('read/<messageid>/', views.api_read),
]
