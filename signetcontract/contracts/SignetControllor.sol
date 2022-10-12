// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Signetors.sol";

/*
 * @title Finesse Marketplace Collection Controllor
 * @author astro
 */
error Contract__Created();

contract SignetControllor is ReentrancyGuard, Ownable {
    Signetor public sSignetor;
    Signetors ST;
    Signetors public STCrator;
    uint256 public TotalSignetorsNum;
    struct ownerstruct {
        address owner;
    }
    mapping(address => ownerstruct) public collectionContractList;
    event CollectionCreated(address indexed creatoraddress, address indexed collectionaddress);

    constructor() {
        ST = new Signetors();
        STCrator = Signetors(ST.ContractAddress());
    }

    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */

    function controllorCreateSignetor(string memory _name, string memory _symbol) external {
        if (getOwnerNumContractOfSignetor(msg.sender) != 0) revert Contract__Created();
        (, address b, ) = STCrator.createSignetor(_name, _symbol, msg.sender);
        TotalSignetorsNum++;
        ownerstruct memory OWS = ownerstruct(msg.sender);
        collectionContractList[b] = OWS;
        emit CollectionCreated(msg.sender, b);
    }

    function getOwnerContractForSignetor(address contractOwner) public view returns (address) {
        (, address b, ) = STCrator.getresponse(0, contractOwner);
        return b;
    }

    function getOwnerNumContractOfSignetor(address contractOwner) public view returns (uint256) {
        uint256 a = STCrator.s_creatorCollection(contractOwner);
        return (a);
    }

    function sendmessage(address addr, string memory tokenURI_) public returns (bool success) {
        sSignetor = Signetor(addr);
        sSignetor.sendmessage(tokenURI_);
        return true;
    }
}
