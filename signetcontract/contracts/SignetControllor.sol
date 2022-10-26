// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Signetors.sol";
import "./PriceConverter.sol";
import "hardhat/console.sol";
/*
 * @title Signetors Controllor
 * @author astro
 */
error Contract__Created();
error Wrong__Contract();
error Already__Followed();
error Never__Followed();
error Can__notfollow();
error No__ContractCreated();
error Not__EnoughAmount();
error Wrong__SignetId();
error Wrong__UserSubmitted();

contract SignetControllor is ReentrancyGuard, Ownable {
    Signetor private sSignetor;
    Signetors ST;
    Signetors private STCrator;
    using PriceConverter for uint256;
    AggregatorV3Interface public priceFeed;
    uint256 public TotalSignetorsNum;
    uint256 public signetId;
    uint256 private constant appreciateAmount = 10 * 10**18;
    struct ownerstruct {
        address owner;
    }

    //followers struct

    struct Followers {
        uint256 followerNum;
        address[] whoFollowed;
    }

    mapping(address => Followers) public follower;

    //following struct

    struct Following {
        uint256 FollowingNum;
        address[] followedWho;
    }

    mapping(address => Following) public following;

    //star struct

    struct signetinfo {
        uint256 likeNum;
        uint256 starNum;
        address SignetIdOwner;
        address[] starContributors;
        address[] likeContributors;
    }

    mapping(uint256 => signetinfo) public signetState;

    mapping(address => uint256) public Stars;

    mapping(address => ownerstruct) public collectionContractList;

    event CollectionCreated(address indexed creatoraddress, address indexed collectionaddress);
    event Followed(address indexed isfollowing, address indexed isfollowed);
    event UnFollowed(address indexed isunfollowing, address indexed isunfollowed);
    event NewMessageSent(
        address indexed messageSender,
        address indexed signetoraddress,
        uint256 messageId,
        uint256 signetId,
        string tokenURI_,
        uint256 time
    );
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

    constructor(address priceFeedAddress) {
        ST = new Signetors();
        STCrator = Signetors(ST.ContractAddress());
        priceFeed = AggregatorV3Interface(priceFeedAddress);
    }

    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */

    function getFollowers(address signetor) public view returns (address[] memory) {
        return (follower[signetor].whoFollowed);
    }

    function getFollowings(address signetor) public view returns (address[] memory) {
        return (following[signetor].followedWho);
    }

    function checkfollowed(address signetor, address followersaddress) public view returns (bool) {
        uint256 i;
        for (i = 0; i < follower[signetor].whoFollowed.length; i++) {
            if (follower[signetor].whoFollowed[i] == followersaddress) {
                console.log(i);
                return (true);
            }
        }
        return (false);
    }

    function checkliked(uint256 signetID, address likedAddress) public view returns (bool) {
        uint256 i;
        for (i = 0; i < signetState[signetID].likeContributors.length; i++) {
            if (signetState[signetID].likeContributors[i] == likedAddress) {
                console.log(i);
                return (true);
            }
        }
        return (false);
    }

    function findfollowerId(address signetor, address followersaddress)
        public
        view
        returns (uint256 id)
    {
        uint256 i = 1;
        for (i = 1; i < follower[signetor].whoFollowed.length + 1; i++) {
            if (follower[signetor].whoFollowed[i - 1] == followersaddress) {
                console.log("----------------------------");
                console.log("checked findfollowerId is :");
                console.log(i);
                console.log("----------------------------");
                return i;
            }
        }
    }

    function findFollwingId(address signetor, address followingAaddress)
        public
        view
        returns (uint256 id)
    {
        uint256 i = 1;
        for (i = 1; i < following[signetor].followedWho.length + 1; i++) {
            if (following[signetor].followedWho[i - 1] == followingAaddress) {
                console.log("----------------------------");
                console.log("checked findFollwingId is :");
                console.log(i);
                console.log("----------------------------");
                return i;
            }
        }
    }

    function findLikeId(uint256 signetID, address likedAddress) public view returns (uint256 id) {
        uint256 i = 1;
        for (i = 1; i < signetState[signetID].likeContributors.length + 1; i++) {
            if (signetState[signetID].likeContributors[i - 1] == likedAddress) {
                console.log("----------------------------");
                console.log("checked findFollwingId is :");
                console.log(i);
                console.log("----------------------------");
                return i;
            }
        }
    }

    function follow(address signetor) public {
        if (
            getOwnerNumContractOfSignetor(msg.sender) == 0 ||
            getOwnerNumContractOfSignetor(signetor) == 0
        ) revert No__ContractCreated();
        if (msg.sender == signetor) revert Can__notfollow();
        bool result = checkfollowed(signetor, msg.sender);
        if (result == true) revert Already__Followed();
        follower[signetor].followerNum++;
        follower[signetor].whoFollowed.push(msg.sender);
        following[msg.sender].FollowingNum++;
        following[msg.sender].followedWho.push(signetor);
        emit Followed(msg.sender, signetor);
    }

    function unfollow(address signetor) public {
        if (
            getOwnerNumContractOfSignetor(msg.sender) == 0 ||
            getOwnerNumContractOfSignetor(signetor) == 0
        ) revert No__ContractCreated();
        if (msg.sender == signetor) revert Can__notfollow();
        bool result = checkfollowed(signetor, msg.sender);
        if (result == false) revert Never__Followed();

        uint256 totalFollower = follower[signetor].followerNum;
        uint256 i = findfollowerId(signetor, msg.sender);
        console.log("----------------------------");
        console.log("total follower:");
        console.log(totalFollower);
        console.log("findFollwingId:");
        console.log(i);
        console.log("----------------------------");
        if (totalFollower == i) {
            follower[signetor].followerNum -= 1;
            follower[signetor].whoFollowed.pop();
        } else {
            follower[signetor].followerNum -= 1;
            follower[signetor].whoFollowed[i - 1] = follower[signetor].whoFollowed[
                follower[signetor].whoFollowed.length - 1
            ];
            // for (i; i < follower[signetor].whoFollowed.length; i++) {
            //     ;
            //     console.log();
            // }
            follower[signetor].whoFollowed.pop();
        }

        uint256 totalFollowing = following[msg.sender].FollowingNum;
        uint256 j = findFollwingId(msg.sender, signetor);
        console.log("----------------------------");
        console.log("total following:");
        console.log(totalFollowing);
        console.log("findfollowerId:");
        console.log(j);
        console.log("----------------------------");
        if (totalFollowing == j) {
            following[msg.sender].FollowingNum -= 1;
            following[msg.sender].followedWho.pop();
        } else {
            following[msg.sender].FollowingNum -= 1;
            following[msg.sender].followedWho[j - 1] = following[msg.sender].followedWho[
                following[msg.sender].followedWho.length - 1
            ];
            // for (j; j < ; j++) {
            //     ;
            // }
            following[msg.sender].followedWho.pop();
        }

        emit UnFollowed(msg.sender, signetor);
    }

    function like(uint256 SignetId, address SignetIdOwner) public {
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msg.sender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        bool result = checkliked(SignetId, msg.sender);
        if (result == true) revert Wrong__UserSubmitted();
        signetState[SignetId].likeNum++;
        signetState[SignetId].likeContributors.push(msg.sender);
        emit Liked(msg.sender, SignetId, SignetIdOwner, block.timestamp);
    }

    function unlike(uint256 SignetId, address SignetIdOwner) public {
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msg.sender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        bool result = checkliked(SignetId, msg.sender);
        if (result == false) revert Wrong__UserSubmitted();
        uint256 totalFollower = signetState[SignetId].likeNum;
        uint256 i = findLikeId(SignetId, msg.sender);
        if (totalFollower == i) {
            signetState[SignetId].likeNum -= 1;
            signetState[SignetId].likeContributors.pop();
        } else {
            signetState[SignetId].likeNum -= 1;
            signetState[SignetId].likeContributors[i - 1] = signetState[SignetId].likeContributors[
                signetState[SignetId].likeContributors.length - 1
            ];
            signetState[SignetId].likeContributors.pop();
        }
        emit Unlike(msg.sender, SignetId, SignetIdOwner, block.timestamp);
    }

    function star(address SignetIdOwner, uint256 SignetId) public payable {
        if (msg.value.getConversionRate(priceFeed) < appreciateAmount) revert Not__EnoughAmount();
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msg.sender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        signetState[SignetId].starNum++;
        signetState[SignetId].starContributors.push(msg.sender);
        uint256 commissionNumerator = 95;
        uint256 commissionDenominator = 100;
        uint256 afterCommission = (msg.value * commissionNumerator) / commissionDenominator;
        (bool callSuccess, ) = payable(SignetIdOwner).call{value: afterCommission}("");
        require(callSuccess, "Call failed");
        emit Stared(msg.sender, SignetId, SignetIdOwner, block.timestamp);
    }

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
        if (getOwnerNumContractOfSignetor(msg.sender) == 0) revert No__ContractCreated();
        address ownercontract = getOwnerContractForSignetor(msg.sender);
        if (addr != ownercontract) revert Wrong__Contract();
        sSignetor = Signetor(addr);
        uint256 messageId = sSignetor.sendmessage(tokenURI_);
        uint256 time = block.timestamp;
        signetId++;
        signetState[signetId].SignetIdOwner = msg.sender;
        emit NewMessageSent(msg.sender, addr, messageId, signetId, tokenURI_, time);
        return true;
    }

    function getStarNum(uint256 SignetId) public view returns (uint256) {
        return (signetState[SignetId].starNum);
    }

    function getLiedNum(uint256 SignetId) public view returns (uint256) {
        return (signetState[SignetId].likeNum);
    }

    function getStarContributor(uint256 SignetId) public view returns (address[] memory) {
        return (signetState[SignetId].starContributors);
    }

    function getLikeContributor(uint256 SignetId) public view returns (address[] memory) {
        return (signetState[SignetId].likeContributors);
    }
}
