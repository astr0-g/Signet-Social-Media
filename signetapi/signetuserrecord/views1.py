from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from signetuserrecord.models import Profile
from signetuserrecord.serializers import ProfileSerializer
from web3 import Web3
from ens import ENS


@api_view(["GET"])
def api_address(request, address):
    try:
        infura_url = "https://mainnet.infura.io/v3/be819d15039f41ca9e45081e212d1c9a"
        ns = ENS(Web3.HTTPProvider(infura_url))
        eth_address = ns.address(address)
        if eth_address != None:
            address = eth_address
    except:
        pass
    try:
        information = Profile.objects.filter(
            userAddress=address)
        for i in information:
            data = ProfileSerializer(i).data
            userName = data['userName']
            userPfp = data['userPfp']
            userBio = data['userBio']
        return JsonResponse({
            "useraddress": f"{address}",
            "userName": f"{userName}",
            "userPfp": f"{userPfp}",
            "userBio": f"{userBio}",
        }, status=200)
    except:
        return JsonResponse({
            "useraddress": f"{address}",
            "userName": "",
            "userPfp": "",
            "userBio": "",
        }, status=200)


@api_view(["GET"])
def api_name(request, name, startnum, numbersofuser):
    endnum = int(numbersofuser) + int(startnum)
    startnum = int(startnum) - 1
    try:
        information = Profile.objects.filter(
            userName__contains=name)[startnum:endnum]
        for i in information:
            data = ProfileSerializer(i).data
            userAddress = data['userAddress']
            userName = data['userName']
            userPfp = data['userPfp']
            userBio = data['userBio']
        return JsonResponse({
            "useraddress": f"{userAddress}",
            "userName": f"{userName}",
            "userPfp": f"{userPfp}",
            "userBio": f"{userBio}",
        }, status=200)
    except:
        return Response("None", status=200)
