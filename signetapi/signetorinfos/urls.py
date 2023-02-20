from django.urls import path

from . import views1
from . import views2
from . import views3
from . import views4
from . import views5
from . import views6
from . import view_search
from . import views


urlpatterns = [
    path('', views.api_home),
    path('search/<content>/<startnum>/<numbersofpost>/', view_search.api_content),
    path('delete/', views.api_delete),
    path('likestar/', views.api_likestar),
    path('signetid/<signetId>/', views.api_signet),
    path('read/<signetorowneraddress>/<startnum>/<endnum>/', views1.api_home),
    path('all/<ago>/<startnum>/<endnum>/', views2.api_home),
    path('followby/<signetorowneraddress>/<startnum>/<endnum>/', views3.api_home),
    path('mostlikesall/<ago>/<startnum>/<endnum>/', views4.api_like),
    path('moststarsall/<ago>/<startnum>/<endnum>/', views4.api_star),
    path('mostviewsall/<ago>/<startnum>/<endnum>/', views4.api_view),
    path('pull/<number>/', views6.api_pull),
    path('pullfollowedby/<signetorowneraddress>/<number>/', views6.api_followedpull),
    # path('mostlikes/<signetorowneraddress>/<ago>/<startnum>/<endnum>/', views5.api_like),
    # path('moststars/<signetorowneraddress>/<ago>/<startnum>/<endnum>/', views5.api_star),
    # path('mostviews/<signetorowneraddress>/<ago>/<startnum>/<endnum>/', views5.api_view),
]
