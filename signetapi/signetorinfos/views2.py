import json
from django.http import JsonResponse
from rest_framework.decorators import api_view
from signetorinfos.models import Signet
from comments.models import Comments
from tokenurl.models import TokenURL
from signetorinfos.serializers import SignetSerializer
from tokenurl.serializers import TokenURLSerializer
import time


@api_view(["GET"])
def api_home(request, ago, startnum, endnum):
    if int(endnum) < 61:
        endnum = int(endnum)
        startnum = int(startnum) - 1
        timeperiod = int(ago) * 86400
        timenow = int(time.time())
        timeafter = timenow - int(timeperiod)
        jsonobj = []
        Signets = Signet.objects.all().filter(
            time__gte=timeafter).order_by('-id')[startnum:endnum]
        for i in Signets:
            data = SignetSerializer(i).data
            Time = data['time']
            MessageSender = data['messageSender']
            MessageId = data['messageId']
            mid = MessageId
            commentsNumber = 0
            information = Comments.objects.filter(messageId=mid)
            for i in information:
                commentsNumber += 1
            TokenURI = data['tokenURI']
            liked = data['liked']
            stared = data['stared']
            views = data["views"]
            ipfsURL = TokenURI
            information = TokenURL.objects.filter(imageurl=ipfsURL)
            for i in information:
                data = TokenURLSerializer(i).data
                imageurl = ""
                if data["image"]:
                    imageurl = "https://route.signet.ink"+data["image"]
                description = data['description']
                jsonobj.append({
                    "messageSender": f"{MessageSender}",
                    "messageId": f"{MessageId}",
                    "tokenimageURL": f"{imageurl}",
                    "tokendescription": f"{description}",
                    "time": f"{Time}",
                    "liked": f"{liked}",
                    "stared": f"{stared}",
                    "views": f"{views}",
                    "commentsNumber": f"{commentsNumber}"
                })
                break

        return JsonResponse(jsonobj, safe=False, status=200)
    else:
        startnum = int(startnum) - 1
        endnum = int(endnum)
        timeperiod = int(ago) * 86400
        timenow = int(time.time())
        timeafter = timenow - int(timeperiod)
        jsonobj = []
        count = Signet.objects.count()
        print(count)
        if endnum > count + 9:
            return JsonResponse(jsonobj, safe=False, status=200)
        else:
            endnum = count
        Signets = Signet.objects.all().filter(
            time__gte=timeafter)[count-endnum:count-startnum]
        print(count-endnum)
        print(count-startnum)
        for i in reversed(Signets):
            data = SignetSerializer(i).data
            Time = data['time']
            MessageSender = data['messageSender']
            MessageId = data['messageId']
            mid = MessageId
            commentsNumber = 0
            information = Comments.objects.filter(messageId=mid)
            for i in information:
                commentsNumber += 1
            TokenURI = data['tokenURI']
            liked = data['liked']
            stared = data['stared']
            views = data["views"]
            ipfsURL = TokenURI
            information = TokenURL.objects.filter(imageurl=ipfsURL)
            for i in information:
                data = TokenURLSerializer(i).data
                imageurl = ""
                if data["image"]:
                    imageurl = "https://route.signet.ink"+data["image"]
                description = data['description']
                jsonobj.append({
                    "messageSender": f"{MessageSender}",
                    "messageId": f"{MessageId}",
                    "tokenimageURL": f"{imageurl}",
                    "tokendescription": f"{description}",
                    "time": f"{Time}",
                    "liked": f"{liked}",
                    "stared": f"{stared}",
                    "views": f"{views}",
                    "commentsNumber": f"{commentsNumber}"
                })
                break

        return JsonResponse(jsonobj, safe=False, status=200)
