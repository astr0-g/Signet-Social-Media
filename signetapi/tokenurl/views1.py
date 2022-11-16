import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from tokenurl.models import TokenURL
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tokenurl.serializers import TokenURLSerializer


@api_view(["GET"])
# def api_add(request):
def api_home(request, idnum):
    idnumb = idnum

    information = TokenURL.objects.filter(idnum=idnumb)
    for i in information:
        data = TokenURLSerializer(i).data
        description = data['description']
        img = ""
        if data["image"]:
            img = "https://api.signet.ink"+data["image"]

    # json = {
    #     "name": "Signet",
    #     "description": f"{description}",
    #     "image": f"{imageurl}",
    # }
        return JsonResponse({
            "name": "Signet",
            "description": f"{description}",
            "image": f"{img}"
        }, status=200)

    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
