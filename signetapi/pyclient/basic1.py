import requests

endpoint = "http://127.0.0.1:8000/signet/likestar/"

get_response = requests.post(endpoint, json=
    {"messageId":"1","liked":"1","stared":"1"}
)
# print(get_response.text)

print(get_response.json())
# print(get_response.status_code)
