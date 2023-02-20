import json
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from signetuserrecord.models import Profile
from signetuserrecord.serializers import ProfileSerializer
from comments.models import Comments
from comments.serializers import CommentsSerializer
from signetorinfos.models import Signet
from notification.models import notifications
from signetorinfos.serializers import SignetSerializer
import time
import random
import hashlib


@api_view(["POST"])
def api_post(request, *arg, **kwargs):
    timenow = int(time.time())
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.data
        useraddress = data['userAddress']
        record = data['userRecord']
        serializerC = CommentsSerializer(data=request.data)
        if serializerC.is_valid(raise_exception=True):
            commentsdata = serializerC.data
            messageId = commentsdata['messageId']
            comments = commentsdata['comments']
            information = Profile.objects.filter(userAddress=useraddress)
            n = 0
            for i in information:
                n += 1
            if n == 1:
                information = Profile.objects.filter(
                    userAddress=useraddress)
                for i in information:
                    oldclinet = ProfileSerializer(i).data
                    a = random.randint(400, 1900)
                    if oldclinet['userRecord'][1:a] == record[1:a]:
                        string1 = str(timenow)[0:9]
                        result1 = tohash(string1)
                        string2 = str(int(str(timenow)[0:9])+1)
                        result2 = tohash(string2)
                        if result1 == record[1934:1966] or result2 == record[1934:1966]:
                            timenow = int(time.time())
                            Comments.objects.create(
                                userAddress=useraddress, messageId=messageId, comments=comments, created_on=timenow)
                            viewd = False
                            idinfo = Signet.objects.filter(messageId=messageId)
                            for i in idinfo:
                                datainfo = SignetSerializer(i).data
                                MessageSender = datainfo['messageSender']
                            if MessageSender != useraddress:
                                notifications.objects.create(typeOfNotification="comments", messageId=messageId,
                                                             userRecived=MessageSender, userSend=useraddress, viewd=viewd, time=timenow)
                            return Response("success", status=200)
                        else:
                            return Response("failed", status=200)
                    else:
                        return Response("failed", status=200)
            else:
                return Response("failed", status=200)
        else:
            return Response("failed", status=200)
    else:
        return Response("failed", status=200)


def tohash(string):
    hl = hashlib.md5()
    hl.update(string.encode(encoding='latin1'))
    hashed = hl.hexdigest()
    return hashed


@api_view(["GET"])
def api_read(request, messageid):
    mid = messageid
    cmts = []
    information = Comments.objects.filter(messageId=mid)
    for i in information:
        data = CommentsSerializer(i).data
        commenter = data['userAddress']
        comment = data['comments']
        created_on = data['created_on']
        cmts.append({
            "commenter": f"{commenter}",
            "messageId": f"{mid}",
            "comment": f"{comment}",
            "time": f"{created_on}",
        })
    return JsonResponse(cmts, safe=False, status=200)
