from rest_framework.response import Response
from django.http import JsonResponse
from tokenurl.models import TokenURL
from rest_framework.decorators import api_view
from comments.models import Comments
from tokenurl.serializers import TokenURLSerializer
from signetorinfos.models import Signet
from signetorinfos.serializers import SignetSerializer


@api_view(["GET"])
def api_content(request, content, startnum, numbersofpost):
    endnum = int(numbersofpost) + int(startnum)
    startnum = int(startnum) - 1
    jsonobj = []
    information = TokenURL.objects.filter(
        description__contains=content)[startnum:endnum]
    for i in information:
        data = TokenURLSerializer(i).data
        imageurl = data['imageurl']
        signetinformation = Signet.objects.filter(
            time__gte=1, tokenURI=imageurl)
        for i in signetinformation:
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
    if len(jsonobj):
        return JsonResponse(jsonobj, safe=False, status=200)
    else:
        return Response("None", status=200)
