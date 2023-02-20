from rest_framework.response import Response
from rest_framework.decorators import api_view
from moralis import evm_api
import requests


@api_view(["GET"])
def api_home(request, address, chain):
    alchemy = "https://eth-goerli.g.alchemy.com/v2/whS5_TSF_-G4EoQ96FUYkzh2XZ51YMTd/getNFTs/?owner=0xa4D411536cbC9c70AdCC966b3dBd755372Fd6CFE"
    result = requests.get(alchemy).json()
    print(result['ownedNfts'][0]["contractMetadata"]["name"])
    new = []
    for i in result["ownedNfts"]:
        try:
            if i["contractMetadata"]["name"] != "Signetor":
                # print(1)
                # if i["normalized_metadata"]["image"] == None:
                #     enpoint = "https://cloudflare-ipfs.com/ipfs/"+i["token_uri"].split("/")[4]+"/"+i["token_id"]+".json"
                #     response = requests.get(enpoint)
                #     imageuri = response.json()['image']
                #     if "https://ipfs.io/ipfs/" in imageuri:
                #         imageuri = "https://cloudflare-ipfs.com/ipfs/"+ imageuri.split("https://ipfs.io/ipfs/")[1]
                #     if "ipfs://" in imageuri:
                #         imageuri = "https://cloudflare-ipfs.com/ipfs/" + imageuri.split("ipfs://")[1]
                #     imagename = response.json()['name']
                #     i["normalized_metadata"]["image"] = imageuri
                #     i["normalized_metadata"]["name"] = imagename
                # else:
                #     if "https://ipfs.io/ipfs/" in i["normalized_metadata"]["image"]:
                #         i["normalized_metadata"]["image"] = "https://cloudflare-ipfs.com/ipfs/" + i["normalized_metadata"]["image"].split("https://ipfs.io/ipfs/")[1]
                #     if "ipfs://" in i["normalized_metadata"]["image"]:
                #         i["normalized_metadata"]["image"] = "https://cloudflare-ipfs.com/ipfs/" + i["normalized_metadata"]["image"].split("ipfs://")[1]
                new.append(i)
        except:
            pass
    return Response(new, content_type='application/json')
