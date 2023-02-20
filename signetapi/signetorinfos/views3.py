from django.http import JsonResponse
from rest_framework.decorators import api_view
from signetorinfos.models import Signet
from followsystem.models import UserFollowing
from tokenurl.models import TokenURL
from comments.models import Comments
from signetorinfos.serializers import SignetSerializer
from tokenurl.serializers import TokenURLSerializer
from followsystem.serializers import UserSerializer


@api_view(["GET"])
def api_home(request, signetorowneraddress, startnum, endnum):
    if int(endnum) < 61:
        startnum = int(startnum) - 1
        endnum = int(endnum)
        MessageSender = signetorowneraddress
        information = UserFollowing.objects.filter(isfollowing=MessageSender)
        followedjsonobj = []
        followedjsonobj.append(MessageSender)
        for i in information:
            data = UserSerializer(i).data
            Isfollowed = data['isfollowed']
            followedjsonobj.append(Isfollowed)
        information = Signet.objects.filter(
            time__gte=1, messageSender__in=followedjsonobj).order_by('-id')[startnum:endnum]
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
        MessageSender = signetorowneraddress
        information = UserFollowing.objects.filter(isfollowing=MessageSender)
        followedjsonobj = []
        followedjsonobj.append(MessageSender)
        for i in information:
            data = UserSerializer(i).data
            Isfollowed = data['isfollowed']
            followedjsonobj.append(Isfollowed)
        count = Signet.objects.filter(
            time__gte=1, messageSender__in=followedjsonobj).count()
        if endnum > count:
            count = endnum
        information = Signet.objects.filter(time__gte=1,
                                            messageSender__in=followedjsonobj)[count-endnum:count-startnum]
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
