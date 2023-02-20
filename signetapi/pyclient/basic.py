import requests

endpoint = "http://localhost:8000/api/"

get_response = requests.get(endpoint)
#print(get_response.text)

print(get_response.json())
#print(get_response.status_code)
