from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from moralis import evm_api
import requests
from django.core.cache import cache


@api_view(["GET"])
def api_fetch(request, address, chain, startnum, endnum):
    endnum = int(endnum)
    startnum = int(startnum) - 1
    api_key = "M6fb9Vgfvm9BDhLQOUGVpYIEYk0tPUfU2qCOX5EDDmetpcjHOmolZH2bKKlwDzaK"
    params = {
        "address": f"{address}",
        "chain": f"{chain}",
        "format": "decimal",
        "limit": 100,
        "token_addresses": [],
        "cursor": "",
        "normalizeMetadata": True,
    }

    result = evm_api.nft.get_wallet_nfts(
        api_key=api_key,
        params=params,
    )
    jsonobjcache = []
    if cache.get(address+chain):
        print(1)
        numberTotal = cache.get(address+chain)
        if numberTotal == result["total"]:
            if cache.get(address) != None:
                jsonobjcache = cache.get(address)
                return JsonResponse(jsonobjcache[startnum:endnum], safe=False, status=200)
        else:
            for i in result["result"]:
                if i["name"] != "Signetor":
                    if i["normalized_metadata"]["image"] == None:
                        enpoint = "https://dweb.link/ipfs/" + \
                            i["token_uri"].split(
                                "/")[4]+"/"+i["token_id"]+".json"
                        response = requests.get(enpoint)
                        imageuri = response.json()['image']
                        if "https://ipfs.io/ipfs/" in imageuri:
                            imageuri = "https://dweb.link/ipfs/" + \
                                imageuri.split("https://ipfs.io/ipfs/")[1]
                        if "ipfs://" in imageuri:
                            imageuri = "https://dweb.link/ipfs/" + \
                                imageuri.split("ipfs://")[1]
                        imagename = response.json()['name']
                        i["normalized_metadata"]["image"] = imageuri
                        i["normalized_metadata"]["name"] = imagename
                    else:
                        if "https://ipfs.io/ipfs/" in i["normalized_metadata"]["image"]:
                            i["normalized_metadata"]["image"] = "https://dweb.link/ipfs/" + \
                                i["normalized_metadata"]["image"].split(
                                    "https://ipfs.io/ipfs/")[1]
                        if "ipfs://" in i["normalized_metadata"]["image"]:
                            i["normalized_metadata"]["image"] = "https://dweb.link/ipfs/" + \
                                i["normalized_metadata"]["image"].split(
                                    "ipfs://")[1]
                    jsonobjcache.append(i)
            cache.set(address+chain, result["total"])
            cache.set(address, jsonobjcache)
            return JsonResponse(jsonobjcache[startnum:endnum], safe=False, status=200)
    else:
        cache.set(address+chain, result["total"])
        for i in result["result"]:
            if i["name"] != "Signetor":
                try:
                    if i["normalized_metadata"]["image"] == None:
                        enpoint = "https://dweb.link/ipfs/" + \
                            i["token_uri"].split(
                                "/")[4]+"/"+i["token_id"]+".json"
                        response = requests.get(enpoint)
                        imageuri = response.json()['image']
                        if "https://ipfs.io/ipfs/" in imageuri:
                            imageuri = "https://dweb.link/ipfs/" + \
                                imageuri.split("https://ipfs.io/ipfs/")[1]
                        if "ipfs://" in imageuri:
                            imageuri = "https://dweb.link/ipfs/" + \
                                imageuri.split("ipfs://")[1]
                        imagename = response.json()['name']
                        i["normalized_metadata"]["image"] = imageuri
                        i["normalized_metadata"]["name"] = imagename
                    else:
                        if "https://ipfs.io/ipfs/" in i["normalized_metadata"]["image"]:
                            i["normalized_metadata"]["image"] = "https://dweb.link/ipfs/" + \
                                i["normalized_metadata"]["image"].split(
                                    "https://ipfs.io/ipfs/")[1]
                        if "ipfs://" in i["normalized_metadata"]["image"]:
                            i["normalized_metadata"]["image"] = "https://dweb.link/ipfs/" + \
                                i["normalized_metadata"]["image"].split(
                                    "ipfs://")[1]
                    jsonobjcache.append(i)
                except:
                    pass
        cache.set(address, jsonobjcache)
        return JsonResponse(jsonobjcache[startnum:endnum], safe=False, status=200)


@api_view(["GET"])
def api_number(request, address, chain):
    api_key = "M6fb9Vgfvm9BDhLQOUGVpYIEYk0tPUfU2qCOX5EDDmetpcjHOmolZH2bKKlwDzaK"
    params = {
        "address": f"{address}",
        "chain": f"{chain}",
        "format": "decimal",
        "limit": 100,
        "token_addresses": [],
        "cursor": "",
        "normalizeMetadata": True,
    }

    result = evm_api.nft.get_wallet_nfts(
        api_key=api_key,
        params=params,
    )
    n = 0
    if cache.get(address+chain+"number"):
        numberTotal = cache.get(address+chain+"number")
        if numberTotal == result["total"]:
            if cache.get(address+"number") != None:
                n = cache.get(address+"number")
                return Response(n, status=200)
        else:
            for i in result["result"]:
                if i["name"] != "Signetor":
                    n += 1
            cache.set(address+chain+"number", result["total"])
            cache.set(address+"number", n)
            return Response(n, status=200)
    else:
        cache.set(address+chain+"number", result["total"])
        for i in result["result"]:
            if i["name"] != "Signetor":
                n += 1
        cache.set(address+"number", n)
        return Response(n, status=200)
