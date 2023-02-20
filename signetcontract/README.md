- ABI
```
[
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    { "internalType": "address", "name": "facetAddress", "type": "address" },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            { "indexed": false, "internalType": "bytes", "name": "_calldata", "type": "bytes" }
        ],
        "name": "DiamondCut",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    { "internalType": "address", "name": "facetAddress", "type": "address" },
                    {
                        "internalType": "enum IDiamondCut.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "internalType": "struct IDiamondCut.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            { "internalType": "address", "name": "_init", "type": "address" },
            { "internalType": "bytes", "name": "_calldata", "type": "bytes" }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "bytes4", "name": "_functionSelector", "type": "bytes4" }],
        "name": "facetAddress",
        "outputs": [{ "internalType": "address", "name": "facetAddress_", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facetAddresses",
        "outputs": [
            { "internalType": "address[]", "name": "facetAddresses_", "type": "address[]" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_facet", "type": "address" }],
        "name": "facetFunctionSelectors",
        "outputs": [
            {
                "internalType": "bytes4[]",
                "name": "facetFunctionSelectors_",
                "type": "bytes4[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "facets",
        "outputs": [
            {
                "components": [
                    { "internalType": "address", "name": "facetAddress", "type": "address" },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "internalType": "struct IDiamondLoupe.Facet[]",
                "name": "facets_",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "bytes4", "name": "_interfaceId", "type": "bytes4" }],
        "name": "supportsInterface",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{ "internalType": "address", "name": "owner_", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_newOwner", "type": "address" }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_priceFeedAddress", "type": "address" }],
        "name": "_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
        "name": "checkNumOfSignetsSent",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }],
        "name": "checkRegistered",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllowedTranfer",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAppreciateAmount",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPriceFeedAddress",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStarCommission",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalSignetorNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalSignetsNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValueForSendMessage",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setAllowedTranfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setNotAllowedTranfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_priceFeedAddress", "type": "address" }],
        "name": "setPriceFeedAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_amountInDollar", "type": "uint256" }],
        "name": "setStarAmountToSend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "_starCommisionPercent", "type": "uint256" }
        ],
        "name": "setStarCommision",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_messagePriceInWei", "type": "uint256" }],
        "name": "setValueForSendMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_erc1155ContractAddress",
                "type": "address"
            },
            { "internalType": "uint256", "name": "_id", "type": "uint256" },
            { "internalType": "uint256", "name": "_amount", "type": "uint256" },
            { "internalType": "address", "name": "_to", "type": "address" }
        ],
        "name": "withdrawERC1155Token",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_erc20ContractAddress", "type": "address" },
            { "internalType": "uint256", "name": "_amount", "type": "uint256" },
            { "internalType": "address", "name": "_to", "type": "address" }
        ],
        "name": "withdrawERC20Token",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_erc721ContractAddress", "type": "address" },
            { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
            { "internalType": "address", "name": "_to", "type": "address" }
        ],
        "name": "withdrawERC721Token",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "messageSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "signetId",
                "type": "uint256"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "MessageDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "messageSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "messageId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "signetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "tokenURI_",
                "type": "string"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "NewMessageSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "userId",
                "type": "uint256"
            },
            { "indexed": false, "internalType": "bytes", "name": "userSig", "type": "bytes" },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "timeRegistered",
                "type": "uint256"
            }
        ],
        "name": "UserRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "deleteMessage",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "string", "name": "_name", "type": "string" },
            { "internalType": "string", "name": "_version", "type": "string" },
            { "internalType": "address", "name": "from", "type": "address" },
            { "internalType": "string", "name": "_notice", "type": "string" },
            { "internalType": "bytes", "name": "_signature", "type": "bytes" }
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "string", "name": "tokenURI_", "type": "string" }],
        "name": "sendMessage",
        "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "isfollowing",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "isfollowed",
                "type": "address"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "Followed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "messageSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "signetId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "signetoraddress",
                "type": "address"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "Liked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "messageSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "signetId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "signetoraddress",
                "type": "address"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "Stared",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "isunfollowing",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "isunfollowed",
                "type": "address"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "UnFollowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "messageSender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "signetId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "signetoraddress",
                "type": "address"
            },
            { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }
        ],
        "name": "Unlike",
        "type": "event"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "signetor", "type": "address" },
            { "internalType": "address", "name": "followersaddress", "type": "address" }
        ],
        "name": "checkfollowed",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "signetID", "type": "uint256" },
            { "internalType": "address", "name": "likedAddress", "type": "address" }
        ],
        "name": "checkliked",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetor", "type": "address" }],
        "name": "follow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetor", "type": "address" }],
        "name": "getFollowersNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetor", "type": "address" }],
        "name": "getFollowingsNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "signetId", "type": "uint256" }],
        "name": "getLikedNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "signetId", "type": "uint256" }],
        "name": "getStarContributor",
        "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "signetId", "type": "uint256" }],
        "name": "getStaredNum",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetor", "type": "address" }],
        "name": "getStaredNumForSignetor",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "signetId", "type": "uint256" },
            { "internalType": "address", "name": "signetIdOwner", "type": "address" }
        ],
        "name": "like",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "signetIdOwner", "type": "address" },
            { "internalType": "uint256", "name": "signetId", "type": "uint256" }
        ],
        "name": "star",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetor", "type": "address" }],
        "name": "unfollow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "signetId", "type": "uint256" },
            { "internalType": "address", "name": "signetIdOwner", "type": "address" }
        ],
        "name": "unlike",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            { "indexed": false, "internalType": "string", "name": "_name", "type": "string" },
            { "indexed": false, "internalType": "string", "name": "_pfp", "type": "string" }
        ],
        "name": "ProfileUpdated",
        "type": "event"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetUserAddress", "type": "address" }],
        "name": "checkName",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }],
        "name": "checkNameAddress",
        "outputs": [
            { "internalType": "bool", "name": "", "type": "bool" },
            { "internalType": "address", "name": "", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }],
        "name": "checkNameAvalable",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetUserAddress", "type": "address" }],
        "name": "checkPfp",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetUserAddress", "type": "address" }],
        "name": "hasName",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "signetUserAddress", "type": "address" }],
        "name": "hasPfp",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "string", "name": "_newname", "type": "string" }],
        "name": "modifyNameForUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "string", "name": "_pfp", "type": "string" },
            { "internalType": "address", "name": "_collection", "type": "address" },
            { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
            { "internalType": "uint256", "name": "_typeOf", "type": "uint256" }
        ],
        "name": "modifyPfpForUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
```
