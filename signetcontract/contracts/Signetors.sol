// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Signetor.sol";

/*
 * @title NFT Marketplace
 * @author astro
 */

contract Signetors {
    Signetor ST;
    address public ControllorAddr;
    address public ContractAddress;

    struct creatorCollection {
        uint256 numOfCollectionCreated;
        crators[] collectionCreated;
    }

    struct crators {
        address Creator;
        address Contract;
        uint8 collectiontype;
    }

    mapping(address => creatorCollection) public s_creatorCollection;

    constructor() {
        ControllorAddr = msg.sender;
        setAddress();
    }

    modifier isControllor() {
        ControllorAddr = msg.sender;
        _;
    }

    /*
     * @notice Method for listing NFT
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param price sale price for each item
     */
    function setAddress() private {
        ContractAddress = address(this);
    }

    function createSignetor(
        string memory _name,
        string memory _symbol,
        address crator
    )
        external
        isControllor
        returns (
            address,
            address,
            uint256
        )
    {
        address newContractAddress;
        address creator;
        ST = new Signetor(_name, _symbol, crator, ControllorAddr);
        newContractAddress = ST.SignetorContractAddress();
        creator = crator;
        s_creatorCollection[crator].numOfCollectionCreated++;
        crators memory Crators = crators(crator, newContractAddress, 1);
        s_creatorCollection[crator].collectionCreated.push(Crators);
        return (creator, newContractAddress, 1);
    }

    function getresponse(uint256 noOfContract, address contractOwner)
        public
        view
        returns (
            address,
            address,
            uint256
        )
    {
        address a = s_creatorCollection[contractOwner].collectionCreated[noOfContract].Creator;
        address b = s_creatorCollection[contractOwner].collectionCreated[noOfContract].Contract;
        uint256 c = s_creatorCollection[contractOwner]
            .collectionCreated[noOfContract]
            .collectiontype;
        return (a, b, c);
    }
}
