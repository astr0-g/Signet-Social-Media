import requests

endpoint = "http://127.0.0.1:8000/signet/all/"

get_response = requests.get(endpoint)
#print(get_response.text)

print(get_response.json())
#print(get_response.status_code)