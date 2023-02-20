from rest_framework.response import Response
from rest_framework.decorators import api_view
from notification.models import notifications
from notification.serializers import notificationSerializer


@api_view(["POST"])
def api_noti_post(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        serializer = notificationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            typeOfNotification = data['typeOfNotification']
            messageId = data['messageId']
            userRecived = data['userRecived']
            userSend = data['userSend']
            viewd = False
            time = data['time']
            try:
                notifications.objects.get_or_create(typeOfNotification=typeOfNotification, messageId=messageId, userRecived=userRecived,
                                                    userSend=userSend, viewd=viewd, time=time)
                return Response({"success": "true"}, status=200)
            except:
                return Response({"success": "true"}, status=200)
        else:
            return Response({"error": "error"}, status=200)
    else:
        return Response({"success": ip}, status=200)
