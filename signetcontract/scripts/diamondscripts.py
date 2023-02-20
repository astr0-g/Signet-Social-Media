from web3 import Web3
import json
from eth_account import Account


class diamond:
    def __init__(self):
        print('please enter gwei:')
        self.gwei = int(input())
        self.infura_url = "https://eth-goerli.g.alchemy.com/v2/whS5_TSF_-G4EoQ96FUYkzh2XZ51YMTd"
        print('using rpc:', self.infura_url)
        self.web3 = Web3(Web3.HTTPProvider(self.infura_url))
        print('please enter privatekey:')
        self.PRIVATE_KEY = input()
        try:
            acct = Account.from_key('0x' + self.PRIVATE_KEY)
        except:
            acct = Account.from_key(self.PRIVATE_KEY)
        self.mainWallet = acct.address
        abi = open(
            'D:/js files/Signet-Social-Media-Platform/signetcontract/scripts/abi.json')
        self.token_abi = json.loads(abi.read())
        self.contract_address = "0x6E9E166586eAaC6618f556021765e661861F7665"
        self.contract = self.web3.eth.contract(
            self.contract_address, abi=self.token_abi)

    def getDetails(self):
        a = self.contract.functions.facets().call()
        print('facets', a)
        a = self.contract.functions.getAllowedTranfer().call()
        print('getAllowedTranfer', a)
        a = self.contract.functions.getAppreciateAmount().call()
        print('getAppreciateAmount', a)
        a = self.contract.functions.getPriceFeedAddress().call()
        print('getPriceFeedAddress', a)
        a = self.contract.functions.getStarCommission().call()
        print('getStarCommission', a)
        a = self.contract.functions.checkRegistered(Web3.toChecksumAddress(
            "0xbd54DD7c3426a7ED3bEC379633E1F9e86B567412")).call()
        print('checkRegistered 0xbd54DD7c3426a7ED3bEC379633E1F9e86B567412', a)
        a = self.contract.functions.hasName(Web3.toChecksumAddress(
            "0xbd54DD7c3426a7ED3bEC379633E1F9e86B567412")).call()
        print('hasName', a)

    def callinit(self):
        nonce = self.web3.eth.getTransactionCount(self.mainWallet)
        toggle = self.contract.functions._init(Web3.toChecksumAddress('0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e')).buildTransaction(
            {
                "chainId": 5,
                "value": 000000000000000000,
                'from': self.mainWallet,
                'nonce': nonce,
                'gas': 4000000,
                'gasPrice': self.web3.toWei(self.gwei, "gwei"),
            })
        signed_txn = self.web3.eth.account.sign_transaction(
            toggle, private_key=self.PRIVATE_KEY)
        tran_hash = self.web3.eth.send_raw_transaction(
            signed_txn.rawTransaction)
        transaction_receipt = self.web3.eth.wait_for_transaction_receipt(
            tran_hash)
        txn = self.web3.toHex(tran_hash)
        if transaction_receipt['status'] == 1:
            print('success')
        else:
            print('failed')
        print('https://goerli.etherscan.io/tx/{}'.format(txn))

    def setconfig(self):
        nonce = self.web3.eth.getTransactionCount(self.mainWallet)
        toggle = self.contract.functions.setStarAmountToSend(10).buildTransaction(
            {
                "chainId": 5,
                "value": 000000000000000000,
                'from': self.mainWallet,
                'nonce': nonce,
                'gas': 3000000,
                'gasPrice': self.web3.toWei(self.gwei, "gwei"),
            })
        signed_txn = self.web3.eth.account.sign_transaction(
            toggle, private_key=self.PRIVATE_KEY)
        tran_hash = self.web3.eth.send_raw_transaction(
            signed_txn.rawTransaction)
        transaction_receipt = self.web3.eth.wait_for_transaction_receipt(
            tran_hash)
        txn = self.web3.toHex(tran_hash)

        if transaction_receipt['status'] == 1:
            print('success')
        else:
            print('failed')
        print('https://goerli.etherscan.io/tx/{}'.format(txn))
        nonce = self.web3.eth.getTransactionCount(self.mainWallet)
        toggle = self.contract.functions.setStarCommision(5).buildTransaction(
            {
                "chainId": 5,
                "value": 000000000000000000,
                'from': self.mainWallet,
                'nonce': nonce,
                'gas': 3000000,
                'gasPrice': self.web3.toWei(self.gwei, "gwei"),
            })
        signed_txn = self.web3.eth.account.sign_transaction(
            toggle, private_key=self.PRIVATE_KEY)
        tran_hash = self.web3.eth.send_raw_transaction(
            signed_txn.rawTransaction)
        transaction_receipt = self.web3.eth.wait_for_transaction_receipt(
            tran_hash)
        txn = self.web3.toHex(tran_hash)
        if transaction_receipt['status'] == 1:
            print('success')
        else:
            print('failed')
        print('https://goerli.etherscan.io/tx/{}'.format(txn))

    def testRegister(self):
        nonce = self.web3.eth.getTransactionCount(self.mainWallet)
        name = "signet"
        version = "0.779"
        fromaddress = Web3.toChecksumAddress(self.mainWallet)
        notice = "Please sign this message to approve your actions for signet"
        signatrue = '0xb8fa8349897c2d1d4267525a09d0ce5253fb2392ac810f5a276b37f43f8edcd25246a7c8ede80e37b7cc2091944a79f3e23035e063800a3658ea8820accf76f51c'
        toggle = self.contract.functions.register(name, version, fromaddress, notice, signatrue).buildTransaction(
            {
                "chainId": 5,
                "value": 000000000000000000,
                'from': self.mainWallet,
                'nonce': nonce,
                'gas': 4000000,
                'gasPrice': self.web3.toWei(self.gwei, "gwei"),
            })
        signed_txn = self.web3.eth.account.sign_transaction(
            toggle, private_key=self.PRIVATE_KEY)
        tran_hash = self.web3.eth.send_raw_transaction(
            signed_txn.rawTransaction)
        transaction_receipt = self.web3.eth.wait_for_transaction_receipt(
            tran_hash)
        txn = self.web3.toHex(tran_hash)
        if transaction_receipt['status'] == 1:
            print('success')
        else:
            print('failed')
        print('https://goerli.etherscan.io/tx/{}'.format(txn))

    def modifyPfpForUser(self):
        nonce = self.web3.eth.getTransactionCount(self.mainWallet)
        toggle = self.contract.functions.modifyPfpForUser("!", "0x05fdBac96C17026c71681150aa44Cbd0DDDd3374", 11, 721).buildTransaction(
            {
                "chainId": 5,
                "value": 000000000000000000,
                'from': self.mainWallet,
                'nonce': nonce,
                'gas': 4000000,
                'gasPrice': self.web3.toWei(self.gwei, "gwei"),
            })
        signed_txn = self.web3.eth.account.sign_transaction(
            toggle, private_key=self.PRIVATE_KEY)
        tran_hash = self.web3.eth.send_raw_transaction(
            signed_txn.rawTransaction)
        transaction_receipt = self.web3.eth.wait_for_transaction_receipt(
            tran_hash)
        txn = self.web3.toHex(tran_hash)
        if transaction_receipt['status'] == 1:
            print('success')
        else:
            print('failed')
        print('https://goerli.etherscan.io/tx/{}'.format(txn))

    def checkerror(self):
        tx = self.web3.eth.get_transaction(
            '0xd237f40d058e6de0cb34ed79f9026f9e06118f50db775bf090854153b8ce5a3e')

        # build a new transaction to replay:
        replay_tx = {
            'to': tx['to'],
            'from': tx['from'],
            'value': tx['value'],
            'data': tx['input'],
        }

        # replay the transaction locally:
        try:
            self.web3.eth.call(replay_tx, tx.blockNumber - 1)
        except Exception as e:
            print(e)


if __name__ == "__main__":
    d = diamond()
    d.callinit()
    d.setconfig()
    d.getDetails()
