from tokenurl.models import TokenURL
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tokenurl.serializers import TokenURLSerializer
import random
import pillow_avif
from PIL import Image
import os
import time
import string
from pathlib import Path

# convert to avif
# @api_view(["POST"])
# def api_home(request, *arg, **kwargs):
#     serializer = TokenURLSerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#         data = serializer.data
#         imageurl = data['imageurl']
#         description = data['description']
#         namegenereate = id_generator(random.randint(60, 80))
#         if request.data['image']:
#             image = request.data['image']
#             image._name = str(namegenereate)+"."+image._name.split('.')[1]
#             image_name2 = "token/"+str(namegenereate)+".avif"
#             print(image)
#             TokenURL.objects.create(
#                 idnum=namegenereate, description=description, imageurl=imageurl, image=image)
#             file = "./render/token/" + image._name
#             fileto = "./render/token/" + str(namegenereate)+".avif"
#             fileToAvif(file, fileto)
#             while True:
#                 try:
#                     os.remove(file)
#                     break
#                 except:
#                     time.sleep(1)
#                     pass
#             TokenURL.objects.filter(
#                 idnum=namegenereate).update(image=image_name2)
#             return Response(namegenereate, status=200)
#         else:
#             TokenURL.objects.create(
#                 idnum=namegenereate, description=description, imageurl=imageurl)
#             return Response(namegenereate, status=200)


# def fileToAvif(file, fileto):
#     print(1)
#     image = Image.open(file)
#     print(1)
#     image.save(fileto, quality=55, save_all=True)

# convert to webp
@api_view(["POST"])
def api_home(request, *arg, **kwargs):
    serializer = TokenURLSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        imageurl = data['imageurl']
        description = data['description']
        namegenereate = id_generator(random.randint(60, 80))
        if request.data['image']:
            image = request.data['image']
            image._name = str(namegenereate)+"."+image._name.split('.')[1]
            image_name2 = "token/"+str(namegenereate)+".webp"
            print(image)
            TokenURL.objects.get_or_create(
                description=description, imageurl=imageurl, image=image)
            file = "./render/token/" + image._name
            destination = Path(file).with_suffix(".webp")
            image = Image.open(file)
            image.save(destination, format="webp", quality=15,
                       save_all=True, optimize=True)
            # os.stat('somefile.ext').st_size
            while True:
                try:
                    os.remove(file)
                    break
                except:
                    time.sleep(1)
                    pass
            TokenURL.objects.filter(
                imageurl=imageurl).update(image=image_name2)
            return Response(namegenereate, status=200)
        else:
            TokenURL.objects.get_or_create(
                description=description, imageurl=imageurl)
            return Response(namegenereate, status=200)


def id_generator(size, chars=string.ascii_uppercase + string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))
