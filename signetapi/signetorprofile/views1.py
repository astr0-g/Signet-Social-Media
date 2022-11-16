import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from tokenurl.models import TokenURL
from rest_framework.response import Response
from rest_framework.decorators import api_view
from signetorprofile.models import Profile
from signetorprofile.serializers import ProfileSerializer


@api_view(["GET"])
# def api_add(request):
def api_home(request, address):

    information = Profile.objects.filter(address=address)
    for i in information:
        data = ProfileSerializer(i).data
        name = data['name']
        profilepic = data["profilepic"]

    # json = {
    #     "name": "Signet",
    #     "description": f"{description}",
    #     "image": f"{imageurl}",
    # }
        return JsonResponse({
            "name": f"{name}",
            "profilepic": f"{profilepic}",
        }, status=200)

    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
