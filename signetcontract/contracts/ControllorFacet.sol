// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./libraries/LibDiamond.sol";
import "./libraries/LibSignetStorage.sol";
import "./libraries/LibVerify.sol";
import "./interfaces/ISignetor.sol";

/*
 * @title Signet Controllor Facet
 * @author astro - outerspace.ai
 */

error Already__Registered();
error Wrong__User();
error Un__Registered();
error Not_Owner();
error Not__EnoughAmount();

contract ControllorFacet {
    AppStorage s;
    modifier onlyOwner() {
        address _owner = owner();
        if (_owner != msg.sender) revert Not_Owner();
        _;
    }

    modifier noReentrant() {
        require(!s.locked, "Reentrancy Protection");
        s.locked = true;
        _;
        s.locked = false;
    }

    modifier Registered() {
        if (LibSignetStorage.checkRegistered(msg.sender) == false) revert Un__Registered();
        _;
    }

    event UserRegistered(
        address indexed userAddress,
        uint256 indexed userId,
        bytes userSig,
        uint256 indexed timeRegistered
    );

    event NewMessageSent(
        address indexed messageSender,
        uint256 messageId,
        uint256 signetId,
        string tokenURI_,
        uint256 time
    );

    event MessageDeleted(address indexed messageSender, uint256 signetId, uint256 time);

    function register(
        string calldata _name,
        string calldata _version,
        address from,
        string calldata _notice,
        bytes calldata _signature
    ) external {
        if (LibSignetStorage.checkRegistered(msg.sender) == true) revert Already__Registered();
        address user = LibVerify.verify(_name, _version, from, address(this), _notice, _signature);
        if (user != msg.sender) revert Wrong__User();
        uint256 userId = LibSignetStorage.register(msg.sender);
        emit UserRegistered(msg.sender, userId, _signature, block.timestamp);
    }

    function sendMessage(
        string memory tokenURI_
    ) public payable Registered returns (bool success) {
        if (msg.value < LibSignetStorage.getValueForSendMessage()) revert Not__EnoughAmount();
        uint256 tokenId = ISignetor(LibSignetStorage.getSignetorAddress()).sendMessage(
            msg.sender,
            tokenURI_
        );
        uint256 messageId = LibSignetStorage.messageSent(msg.sender);
        emit NewMessageSent(msg.sender, tokenId, messageId, tokenURI_, block.timestamp);
        return true;
    }

    function deleteMessage(uint256 tokenId) public Registered returns (bool success) {
        ISignetor(LibSignetStorage.getSignetorAddress()).deleteMessage(msg.sender, tokenId);
        LibSignetStorage.messageDelete(msg.sender);
        emit MessageDeleted(msg.sender, tokenId, block.timestamp);
        return true;
    }

    function owner() internal view returns (address owner_) {
        owner_ = LibDiamond.contractOwner();
    }
}
