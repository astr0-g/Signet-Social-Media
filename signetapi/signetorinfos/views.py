import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from signetorinfos.models import Signet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from signetorinfos.serializers import SignetSerializer
from tokenurl.models import TokenURL
from tokenurl.serializers import TokenURLSerializer
import random
from comments.models import Comments
from comments.serializers import CommentsSerializer
from web3 import Web3


@api_view(["POST"])
# def api_add(request):
def api_home(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        serializer = SignetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            messageSender = data['messageSender']
            messageId = int(data['messageId'])
            tokenURI = data['tokenURI']
            time = data['time']
            if Signet.objects.filter(id=messageId).update(
                    messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=time):
                print(1)
                Signet.objects.filter(id=messageId).update(
                    messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=time)
                return Response({"success": "true"}, status=200)
            else:
                print(2)
                Signet.objects.create(id=messageId,
                                      messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=time, liked=0, stared=0, views=0)
                return Response({"success": "true"}, status=200)

        else:
            return Response({"success": "false"}, status=490)
    else:
        return Response({"success": ip}, status=490)


@api_view(["POST"])
def api_delete(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        serializer = SignetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            messageSender = data['messageSender']
            messageId = int(data['messageId'])
            tokenURI = data['tokenURI']
            time = data['time']
            if Signet.objects.filter(id=messageId).update(
                    messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=0):
                Signet.objects.filter(id=messageId).update(
                    messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=0)
                return Response({"success": "true"}, status=200)
            else:
                Signet.objects.get_or_create(id=messageId,
                                             messageSender=messageSender, messageId=messageId, tokenURI=tokenURI, time=time, liked=0, stared=0, views=0)
                return Response({"success": "true"}, status=200)

        else:
            return Response({"success": "false"}, status=490)
    else:
        return Response({"success": ip}, status=490)


@api_view(["POST"])
def api_likestar(request, *arg, **kwargs):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if user_ip_address:
        ip = user_ip_address.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    if ip == "34.221.132.64" or ip == "44.226.85.233":
        infura_url = "https://goerli.infura.io/v3/be819d15039f41ca9e45081e212d1c9a"
        web3 = Web3(Web3.HTTPProvider(infura_url))
        abi = json.loads('[{ "inputs": [{"internalType": "uint256", "name": "signetId", "type": "uint256"}], "name": "getLikedNum", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }, { "inputs": [{"internalType": "uint256", "name": "signetId", "type": "uint256"}], "name": "getStaredNum", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function" }]')
        address = '0x6E9E166586eAaC6618f556021765e661861F7665'
        contract = web3.eth.contract(address=address, abi=abi)
        serializer = SignetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            messageId = data['messageId']
            likednum = int(data['liked'])
            starednum = int(data['stared'])
            user = Signet.objects.filter(messageId=messageId)
            for i in user:
                data = SignetSerializer(i).data
                if likednum != 0:
                    likenums = contract.functions.getLikedNum(
                        int(messageId)).call()
                    Signet.objects.filter(
                        messageId=messageId).update(liked=likenums)
                if starednum != 0:
                    starnums = contract.functions.getStaredNum(
                        int(messageId)).call()
                    Signet.objects.filter(
                        messageId=messageId).update(stared=starnums)
            return Response({"success": "true"}, status=200)
        else:
            return Response({"success": "false"}, status=490)
    else:
        return Response({"success": ip}, status=490)


@api_view(["GET"])
def api_signet(request, signetId, **kwargs):
    try:
        information = Signet.objects.filter(time__gte=1, messageId=signetId)
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
            viewsnow = int(views) + 1
            ipfsURL = TokenURI
            information = TokenURL.objects.filter(imageurl=ipfsURL)
            for i in information:
                data = TokenURLSerializer(i).data
                imageurl = ""
                if data["image"]:
                    imageurl = "https://route.signet.ink" + data["image"]
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
            Signet.objects.filter(messageId=MessageId).update(views=viewsnow)

        return JsonResponse(jsonobj, safe=False, status=200)
    except:
        jsonobj = [{
            "messageSender": 0,
            "messageId": 0,
            "tokenimageURL": 0,
            "tokendescription": "This message doesn't exist",
            "time": 0,
            "liked": 0,
            "stared": 0,
            "views": 0,
            "commentsNumber": 0
        }]
        return JsonResponse(jsonobj, safe=False, status=200)
