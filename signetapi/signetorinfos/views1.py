from django.http import JsonResponse
from signetorinfos.models import Signet
from rest_framework.decorators import api_view
from signetorinfos.serializers import SignetSerializer
from tokenurl.models import TokenURL
from tokenurl.serializers import TokenURLSerializer
from comments.models import Comments


@api_view(["GET"])
def api_home(request, signetorowneraddress, startnum, endnum):
    if int(endnum) < 61:
        startnum = int(startnum) - 1
        endnum = int(endnum)
        MessageSender = signetorowneraddress
        count = Signet.objects.filter(
            time__gte=1, messageSender=MessageSender).count()
        if endnum > count:
            count = endnum
        information = Signet.objects.filter(time__gte=1,
                                            messageSender=MessageSender).order_by('-id')[startnum:endnum]
        jsonobj = []
        for i in information:
            data = SignetSerializer(i).data
            MessageSender = data['messageSender']
            MessageId = data['messageId']
            mid = MessageId
            commentsNumber = 0
            information = Comments.objects.filter(messageId=mid)
            for i in information:
                commentsNumber += 1
            TokenURI = data['tokenURI']
            Time = data['time']
            liked = data['liked']
            stared = data['stared']
            views = data['views']
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
        MessageSender = signetorowneraddress
        count = Signet.objects.filter(
            time__gte=1, messageSender=MessageSender).count()
        if endnum > count:
            count = endnum
        information = Signet.objects.filter(time__gte=1, messageSender=MessageSender)[
            count-endnum:count-startnum]
        jsonobj = []
        for i in reversed(information):
            data = SignetSerializer(i).data
            MessageSender = data['messageSender']
            MessageId = data['messageId']
            mid = MessageId
            commentsNumber = 0
            information = Comments.objects.filter(messageId=mid)
            for i in information:
                commentsNumber += 1
            TokenURI = data['tokenURI']
            Time = data['time']
            liked = data['liked']
            stared = data['stared']
            views = data['views']
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
