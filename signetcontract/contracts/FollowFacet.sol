// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./libraries/LibDiamond.sol";
import "./libraries/LibSignetStorage.sol";
import "./libraries/LibPriceConverter.sol";

/*
 * @title Signet Follow Facet
 * @author astro - outerspace.ai
 */

error Already__Followed();
error Never__Followed();
error Can__notfollow();
error Not__EnoughAmount();
error Wrong__UserSubmitted();
error Can__NotLike();
error Not_Owner();
error Un__Registered();

contract FollowFacet {
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

    event Followed(address indexed isfollowing, address indexed isfollowed, uint256 time);
    event UnFollowed(address indexed isunfollowing, address indexed isunfollowed, uint256 time);
    event Liked(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );
    event Stared(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );
    event Unlike(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );

    function follow(address signetor) public Registered {
        if (msg.sender == signetor) revert Can__notfollow();
        if (checkfollowed(signetor, msg.sender) == true) revert Already__Followed();
        LibSignetStorage.follow(msg.sender, signetor);
        emit Followed(msg.sender, signetor, block.timestamp);
    }

    function unfollow(address signetor) public Registered {
        if (msg.sender == signetor) revert Can__notfollow();
        if (checkfollowed(signetor, msg.sender) == false) revert Never__Followed();
        LibSignetStorage.unfollow(msg.sender, signetor);
        emit UnFollowed(msg.sender, signetor, block.timestamp);
    }

    function like(uint256 signetId, address signetIdOwner) public Registered {
        if (msg.sender == signetIdOwner) revert Wrong__UserSubmitted();
        if (checklikeable(signetIdOwner, signetId) == false) revert Can__NotLike();
        LibSignetStorage.like(msg.sender, signetId);
        emit Liked(msg.sender, signetId, signetIdOwner, block.timestamp);
    }

    function unlike(uint256 signetId, address signetIdOwner) public Registered {
        if (msg.sender == signetIdOwner) revert Wrong__UserSubmitted();
        if (checklikeable(signetIdOwner, signetId) == false) revert Can__NotLike();
        LibSignetStorage.unlike(msg.sender, signetId);
        emit Unlike(msg.sender, signetId, signetIdOwner, block.timestamp);
    }

    function star(address signetIdOwner, uint256 signetId) external payable Registered {
        if (msg.sender == signetIdOwner) revert Wrong__UserSubmitted();
        if (checklikeable(signetIdOwner, signetId) == false) revert Can__NotLike();
        if (
            LibPriceConverter.getConversionRate(msg.value) < LibSignetStorage.getAppreciateAmount()
        ) revert Not__EnoughAmount();
        LibSignetStorage.star(msg.sender, signetIdOwner, signetId);
        uint256 afterCommission = calculateComssion(msg.value);
        (bool callSuccess, ) = payable(signetIdOwner).call{value: afterCommission}("");
        require(callSuccess, "Call failed");
        emit Stared(msg.sender, signetId, signetIdOwner, block.timestamp);
    }

    function calculateComssion(uint256 _value) internal view returns (uint256) {
        uint256 commission = LibSignetStorage.getStarCommission();
        uint256 commissionNumerator = 100 - commission;
        uint256 commissionDenominator = 100;
        return (_value * commissionNumerator) / commissionDenominator;
    }

    function checklikeable(address signetIdOwner, uint256 signetId) internal view returns (bool) {
        return (LibSignetStorage.checklikeable(signetIdOwner, signetId));
    }

    function checkfollowed(address signetor, address followersaddress) public view returns (bool) {
        return (LibSignetStorage.checkfollowed(signetor, followersaddress));
    }

    function checkliked(uint256 signetID, address likedAddress) public view returns (bool) {
        return (LibSignetStorage.checkliked(signetID, likedAddress));
    }

    function getFollowingsNum(address signetor) external view returns (uint256) {
        return (LibSignetStorage.getFollowingsNum(signetor));
    }

    function getFollowersNum(address signetor) external view returns (uint256) {
        return (LibSignetStorage.getFollowersNum(signetor));
    }

    function getStaredNumForSignetor(address signetor) external view returns (uint256) {
        return (LibSignetStorage.getStaredNumForSignetor(signetor));
    }

    function getLikedNum(uint256 signetId) external view returns (uint256) {
        return (LibSignetStorage.getLikedNum(signetId));
    }

    function getStaredNum(uint256 signetId) external view returns (uint256) {
        return (LibSignetStorage.getStaredNum(signetId));
    }

    function getStarContributor(uint256 signetId) external view returns (address[] memory) {
        return (LibSignetStorage.getStarContributor(signetId));
    }

    function owner() internal view returns (address owner_) {
        owner_ = LibDiamond.contractOwner();
    }
}
