from django.http import JsonResponse
from rest_framework.decorators import api_view
from signetorinfos.models import Signet
from tokenurl.models import TokenURL
from comments.models import Comments
from signetorinfos.serializers import SignetSerializer
from tokenurl.serializers import TokenURLSerializer
import time


@api_view(["GET"])
def api_like(request, signetorowneraddress, ago, startnum, endnum):
    startnum = int(startnum) - 1
    endnum = int(endnum)
    timeperiod = int(ago) * 86400
    timenow = int(time.time())
    timeafter = timenow - int(timeperiod)
    MessageSender = signetorowneraddress
    information = Signet.objects.filter(
        messageSender=MessageSender).order_by('liked', 'time')
    jsonobj = []
    for i in reversed(information):
        data = SignetSerializer(i).data
        Time = data['time']
        if int(Time) > timeafter:
            if startnum != -1:
                startnum = startnum - 1
                endnum = endnum - 1
            if startnum == -1:
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
                endnum = endnum - 1
            if endnum == -1:
                break

    return JsonResponse(jsonobj, safe=False, status=200)


def api_star(request, signetorowneraddress, ago, startnum, endnum):
    startnum = int(startnum) - 1
    endnum = int(endnum)
    timeperiod = int(ago) * 86400
    timenow = int(time.time())
    timeafter = timenow - int(timeperiod)
    MessageSender = signetorowneraddress
    information = Signet.objects.filter(
        messageSender=MessageSender).order_by('stared', 'time')
    jsonobj = []
    for i in reversed(information):
        data = SignetSerializer(i).data
        Time = data['time']
        if int(Time) > timeafter:
            if startnum != -1:
                startnum = startnum - 1
                endnum = endnum - 1
            if startnum == -1:
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
                endnum = endnum - 1
            if endnum == -1:
                break
    return JsonResponse(jsonobj, safe=False, status=200)


def api_view(request, signetorowneraddress, ago, startnum, endnum):
    startnum = int(startnum) - 1
    endnum = int(endnum)
    timeperiod = int(ago) * 86400
    timenow = int(time.time())
    timeafter = timenow - int(timeperiod)
    MessageSender = signetorowneraddress
    information = Signet.objects.filter(
        messageSender=MessageSender).order_by('views', 'time')
    jsonobj = []
    for i in reversed(information):
        data = SignetSerializer(i).data
        Time = data['time']
        if int(Time) > timeafter:
            if startnum != -1:
                startnum = startnum - 1
                endnum = endnum - 1
            if startnum == -1:
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
                endnum = endnum - 1
            if endnum == -1:
                break
    return JsonResponse(jsonobj, safe=False, status=200)


def sortview(e):
    return int(e['views'])


def sortstared(e):
    return int(e['stared'])


def sortliked(e):
    return int(e['liked'])
