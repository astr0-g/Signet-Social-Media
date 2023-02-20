import random
from django.http import JsonResponse
from tokenurl.models import TokenURL
from rest_framework.decorators import api_view
from tokenurl.serializers import TokenURLSerializer
from signetorinfos.models import Signet
from signetorinfos.serializers import SignetSerializer
from followsystem.models import UserFollowing
from followsystem.serializers import UserSerializer
from rest_framework.response import Response


@api_view(["GET"])
def api_pull(request, number):
    jsonobj = []
    alls = random.randint(
        int(number), Signet.objects.count() - int(number))
    like = random.randint(
        int(number), Signet.objects.filter(time__gte=1, liked__gte=0).count() - int(number))
    star = random.randint(
        int(number), Signet.objects.filter(time__gte=1, stared__gte=0).count() - int(number))
    view = random.randint(
        int(number), Signet.objects.filter(time__gte=1, views__gte=0).count() - int(number))
    for i in range(int(number)):
        allsdata = SignetSerializer(
            Signet.objects.all()[alls]).data
        likedata = SignetSerializer(
            Signet.objects.filter(time__gte=1, liked__gte=0)[like]).data
        stardata = SignetSerializer(
            Signet.objects.filter(time__gte=1, stared__gte=0)[star]).data
        viewdata = SignetSerializer(
            Signet.objects.filter(time__gte=1, views__gte=0)[view]).data
        information = TokenURL.objects.filter(imageurl=allsdata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{allsdata['messageSender']}",
            "messageId": f"{ allsdata['messageId']}",
            "tokendescription": f"{description}",
        })
        information = TokenURL.objects.filter(imageurl=likedata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{likedata['messageSender']}",
            "messageId": f"{ likedata['messageId']}",
            "tokendescription": f"{description}",
        })
        information = TokenURL.objects.filter(imageurl=stardata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{stardata['messageSender']}",
            "messageId": f"{ stardata['messageId']}",
            "tokendescription": f"{description}",
        })
        information = TokenURL.objects.filter(imageurl=viewdata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{viewdata['messageSender']}",
            "messageId": f"{ viewdata['messageId']}",
            "tokendescription": f"{description}",
        })
        if alls % 2:
            alls += 1
            like -= 1
            star += 1
            view -= 1
        else:
            alls -= 1
            like += 1
            star -= 1
            view += 1

    return JsonResponse(jsonobj, safe=False, status=200)


@api_view(["GET"])
def api_followedpull(request, signetorowneraddress, number):
    information = UserFollowing.objects.filter(
        isfollowing=signetorowneraddress)
    followedjsonobj = []
    for i in information:
        data = UserSerializer(i).data
        Isfollowed = data['isfollowed']
        followedjsonobj.append(Isfollowed)
    if len(followedjsonobj) < int(number):
        return Response("None", status=200)
    jsonobj = []
    like = random.randint(
        int(number), Signet.objects.filter(time__gte=1, liked__gte=0, messageSender__in=followedjsonobj).count() - int(number))
    star = random.randint(
        int(number), Signet.objects.filter(time__gte=1, stared__gte=0, messageSender__in=followedjsonobj).count() - int(number))
    view = random.randint(
        int(number), Signet.objects.filter(time__gte=1, views__gte=0, messageSender__in=followedjsonobj).count() - int(number))
    for i in range(int(number)):
        likedata = SignetSerializer(
            Signet.objects.filter(time__gte=1, liked__gte=0, messageSender__in=followedjsonobj)[like]).data
        stardata = SignetSerializer(
            Signet.objects.filter(time__gte=1, stared__gte=0, messageSender__in=followedjsonobj)[star]).data
        viewdata = SignetSerializer(
            Signet.objects.filter(time__gte=1, views__gte=0), messageSender__in=followedjsonobj[view]).data
        information = TokenURL.objects.filter(imageurl=likedata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{likedata['messageSender']}",
            "messageId": f"{ likedata['messageId']}",
            "tokendescription": f"{description}",
        })
        information = TokenURL.objects.filter(imageurl=stardata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{stardata['messageSender']}",
            "messageId": f"{ stardata['messageId']}",
            "tokendescription": f"{description}",
        })
        information = TokenURL.objects.filter(imageurl=viewdata['tokenURI'])
        for i in information:
            data = TokenURLSerializer(i).data
            description = data['description']
        jsonobj.append({
            "messageSender": f"{viewdata['messageSender']}",
            "messageId": f"{ viewdata['messageId']}",
            "tokendescription": f"{description}",
        })
        if like % 2:
            like -= 1
            star += 1
            view -= 1
        else:
            like += 1
            star -= 1
            view += 1

    return JsonResponse(jsonobj, safe=False, status=200)
