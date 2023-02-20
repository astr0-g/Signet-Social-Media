from mexc_sdk import Spot
import json
import time
client = Spot(api_key="mx0Mr9JCPqK4lO6APS", api_secret="d837bc2e860b4e25a0f2173a6ce37a28")

def sell():
    ethbalance = client.account_info()['balances'][0]['free']
    print(ethbalance)
    SELL = client.new_order(symbol="ETHUSDT", side="SELL", order_type="MARKET", options={"quantity": str(ethbalance)})
# if success to post test order to service, res will get {}.
    print(SELL)
def buy():
    BUY = client.new_order(symbol="ETHUSDT", side="BUY", order_type="MARKET",
                            options={"quantity": 0.01,'quoteOrderQty':30})
    print(BUY)
while True:
    a = str(client.historical_trades(symbol="ETHUSDT", options={"limit": 1})).split()[3].split("'")[1]
    print(a)
    time.sleep(3)
    b = str(client.historical_trades(symbol="ETHUSDT", options={"limit": 1})).split()[3].split("'")[1]
    print(b)
    if float(b) > float(a)+3:
        buy()
        boughtprice = float(b)
        ethbalance = client.account_info()['balances'][0]['free']
        while True:
            pricenow = str(client.historical_trades(symbol="ETHUSDT", options={"limit": 1})).split()[3].split("'")[1]
            time.sleep(1)
            if float(pricenow) > boughtprice*1.05:
                sell()
                break
            if float(pricenow) <boughtprice*0.97:
                sell()
                break
