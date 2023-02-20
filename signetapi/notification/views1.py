from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from notification.models import notifications
from notification.serializers import notificationSerializer

@api_view(["GET"])
def number_home(request, address):
    user = notifications.objects.filter(userRecived=address)
    n = 0
    for i in reversed(user):
        data = notificationSerializer(i).data
        viewd = data['viewd']
        if viewd == False:
            n = n + 1
    return Response({
            "unreadmessagenumber": f"{n}"
        }, status=200)


@api_view(["GET"])
def read_home(request, address, startnum, endnum):
    noti = []
    startnum = int(startnum) - 1
    endnum = int(endnum)
    user = notifications.objects.filter(userRecived=address)
    for i in reversed(user):
        if startnum != -1:
            startnum = startnum - 1
            endnum = endnum - 1
        if startnum == -1:
            data = notificationSerializer(i).data
            typeOfNotification = data['typeOfNotification']
            messageId = data['messageId']
            userRecived = data['userRecived']
            userSend = data['userSend']
            viewd = data['viewd']
            time= data['time']
            noti.append({
                "typeOfNotification":f"{typeOfNotification}", 
                "messageId":f"{messageId}",
                "reciver": f"{userRecived}",
                "sender":f"{userSend}",
                "viewd":f"{viewd}", 
                "time":f"{time}"
            })
            notifications.objects.filter(id=i.id).update(viewd=True)
            endnum = endnum - 1
        if endnum == -1:
            break
    return JsonResponse(noti, safe=False, status=200)
