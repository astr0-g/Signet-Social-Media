import requests

endpoint = "http://127.0.0.1:8000/tokenurl/"

get_response = requests.post(endpoint, json={"imageurl":"1234","description":"12356"})
#print(get_response.text)

print(get_response.json())
#print(get_response.status_code)
