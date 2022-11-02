// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Signetors.sol";
import "./PriceConverter.sol";
import "hardhat/console.sol";
/*
 * @title Signetors SignetFollowSystem
 * @author astro
 */

error Already__Followed();
error Never__Followed();
error Can__notfollow();
error Not__EnoughAmount();
error Wrong__SignetId();
error Wrong__UserSubmitted();
error not__FromSignetControllor();

contract SignetFollowSystem is ReentrancyGuard {
    AggregatorV3Interface public priceFeed;
    using PriceConverter for uint256;
    uint256 public TotalSignetorsNum;
    uint256 public signetId;
    address public signetControllor;
    address public owner;
    uint256 private constant appreciateAmount = 10 * 10**18;

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

    event Followed(address indexed isfollowing, address indexed isfollowed);
    event UnFollowed(address indexed isunfollowing, address indexed isunfollowed);
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

    constructor(address _priceFeedAddress) {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
        owner = msg.sender;
    }

    modifier fromSignetControllor() {
        if (msg.sender != signetControllor) revert not__FromSignetControllor();
        _;
    }

    function setSignetControllor(address _signetControllor) external {
        require(msg.sender == owner, "wrong owner address");
        signetControllor = _signetControllor;
    }

    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */

    function messageSender(address msgSender) external fromSignetControllor returns (uint256) {
        signetId++;
        signetState[signetId].SignetIdOwner = msgSender;
        return (signetId);
    }

    function follow(address msgSender, address signetor) external fromSignetControllor {
        if (msgSender == signetor) revert Can__notfollow();
        bool result = checkfollowed(signetor, msgSender);
        if (result == true) revert Already__Followed();
        follower[signetor].followerNum++;
        follower[signetor].whoFollowed.push(msgSender);
        following[msgSender].FollowingNum++;
        following[msgSender].followedWho.push(signetor);
        emit Followed(msgSender, signetor);
    }

    function unfollow(address msgSender, address signetor) external fromSignetControllor {
        if (msgSender == signetor) revert Can__notfollow();
        bool result = checkfollowed(signetor, msgSender);
        if (result == false) revert Never__Followed();

        uint256 totalFollower = follower[signetor].followerNum;
        uint256 i = findfollowerId(signetor, msgSender);
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

        uint256 totalFollowing = following[msgSender].FollowingNum;
        uint256 j = findFollwingId(msgSender, signetor);
        console.log("----------------------------");
        console.log("total following:");
        console.log(totalFollowing);
        console.log("findfollowerId:");
        console.log(j);
        console.log("----------------------------");
        if (totalFollowing == j) {
            following[msgSender].FollowingNum -= 1;
            following[msgSender].followedWho.pop();
        } else {
            following[msgSender].FollowingNum -= 1;
            following[msgSender].followedWho[j - 1] = following[msgSender].followedWho[
                following[msgSender].followedWho.length - 1
            ];
            // for (j; j < ; j++) {
            //     ;
            // }
            following[msgSender].followedWho.pop();
        }

        emit UnFollowed(msgSender, signetor);
    }

    function like(
        address msgSender,
        uint256 SignetId,
        address SignetIdOwner
    ) external fromSignetControllor {
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msgSender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        bool result = checkliked(SignetId, msgSender);
        if (result == true) revert Wrong__UserSubmitted();
        signetState[SignetId].likeNum++;
        signetState[SignetId].likeContributors.push(msgSender);
        emit Liked(msgSender, SignetId, SignetIdOwner, block.timestamp);
    }

    function unlike(
        address msgSender,
        uint256 SignetId,
        address SignetIdOwner
    ) external fromSignetControllor {
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msgSender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        bool result = checkliked(SignetId, msgSender);
        if (result == false) revert Wrong__UserSubmitted();
        uint256 totalFollower = signetState[SignetId].likeNum;
        uint256 i = findLikeId(SignetId, msgSender);
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
        emit Unlike(msgSender, SignetId, SignetIdOwner, block.timestamp);
    }

    function star(
        address msgSender,
        address SignetIdOwner,
        uint256 SignetId
    ) external payable fromSignetControllor {
        console.log(msg.value.getConversionRate(priceFeed));
        console.log(appreciateAmount);
        if (msg.value.getConversionRate(priceFeed) < appreciateAmount) revert Not__EnoughAmount();
        if (SignetId > signetId || signetId == 0 || SignetId == 0) revert Wrong__SignetId();
        if (
            signetState[SignetId].SignetIdOwner == msgSender ||
            signetState[SignetId].SignetIdOwner != SignetIdOwner
        ) revert Wrong__UserSubmitted();
        Stars[SignetIdOwner]++;
        signetState[SignetId].starNum++;
        signetState[SignetId].starContributors.push(msgSender);
        uint256 commissionNumerator = 95;
        uint256 commissionDenominator = 100;
        uint256 afterCommission = (msg.value * commissionNumerator) / commissionDenominator;
        (bool callSuccess, ) = payable(SignetIdOwner).call{value: afterCommission}("");

        require(callSuccess, "Call failed");
        emit Stared(msg.sender, SignetId, SignetIdOwner, block.timestamp);
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

    function getFollowingsNum(address signetor) external view returns (uint256) {
        return (following[signetor].FollowingNum);
    }

    function getFollowersNum(address signetor) external view returns (uint256) {
        return (follower[signetor].followerNum);
    }

    function getFollowers(address signetor) external view returns (address[] memory) {
        return (follower[signetor].whoFollowed);
    }

    function getFollowings(address signetor) external view returns (address[] memory) {
        return (following[signetor].followedWho);
    }

    function getStaredNum(address SignetorAddress) external view returns (uint256) {
        return (Stars[SignetorAddress]);
    }

    function getLikedNum(uint256 SignetId) external view returns (uint256) {
        return (signetState[SignetId].likeNum);
    }

    function getStarContributor(uint256 SignetId) external view returns (address[] memory) {
        return (signetState[SignetId].starContributors);
    }

    function getLikeContributor(uint256 SignetId) external view returns (address[] memory) {
        return (signetState[SignetId].likeContributors);
    }
}
