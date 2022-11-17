import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from products.models import Product
from tokenurl.models import TokenURL
from rest_framework.response import Response
from rest_framework.decorators import api_view
from products.serializers import ProductSerializer
from tokenurl.serializers import TokenURLSerializer
import random
from PIL import Image


@api_view(["POST"])
# def api_add(request):
def api_home(request, *arg, **kwargs):
    serializer = TokenURLSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        imageurl = data['imageurl']
        description = data['description']
        idnumber = random.randint(100000000000000000000000, 999999999999999999999999)
        if request.data['image']:
            image = request.data['image']
            image._name = str(random.randint(
                100000000000000000000000, 999999999999999999999999))+"."+image._name.split('.')[1]
            TokenURL.objects.create(
                idnum=idnumber, description=description,imageurl=imageurl, image=image)
            # json = {
            #     "name": "Signet",
            #     "description": f"{description}",
            #     "image": f"{imageurl}",
            # }
            return Response(idnumber, status=200)
        else:
            TokenURL.objects.create(
                idnum=idnumber, description=description, imageurl=imageurl)
            return Response(idnumber, status=200)
    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
