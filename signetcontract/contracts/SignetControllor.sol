// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Signetors.sol";
import "hardhat/console.sol";
/*
 * @title Signetors Controllor
 * @author astro
 */
error Contract__Created();
error Already__Followed();
error Never__Followed();
error Can__notfollow();
error No__ContractCreated();

contract SignetControllor is ReentrancyGuard, Ownable {
    Signetor public sSignetor;
    Signetors ST;
    Signetors public STCrator;
    uint256 public TotalSignetorsNum;
    struct ownerstruct {
        address owner;
    }

    //followers struct
    struct followers {
        address followed;
    }

    struct Followers {
        uint256 followerNum;
        followers[] whoFollowed;
    }

    mapping(address => Followers) public follower;

    //following struct
    struct followings {
        address followinged;
    }

    struct Following {
        uint256 FollowingNum;
        followings[] followedWho;
    }

    mapping(address => Following) public following;

    mapping(address => ownerstruct) public collectionContractList;

    event CollectionCreated(address indexed creatoraddress, address indexed collectionaddress);
    event Followed(address indexed isfollowing, address indexed isfollowed);
    event UnFollowed(address indexed isunfollowing, address indexed isunfollowed);
    event NewMessageSent(
        address indexed messageSender,
        address indexed signetoraddress,
        uint256 messageId,
        string tokenURI_,
        uint256 time
    );

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

    // function seefollowers(address signetor) public view returns (address[] memory) {
    //     address[] memory arrey;
    //     uint256 i;
    //     for (i = 0; i < follower[signetor].whoFollowed.length; i++) {
    //         address a = follower[signetor].whoFollowed[i].followed;
    //         arrey[i] = a;
    //     }
    //     return arrey;
    // }

    // function seefollowings(address signetor) public view returns (address[] memory) {
    //     address[] memory arrey;
    //     uint256 i;
    //     for (i = 0; i < following[signetor].followedWho.length; i++) {
    //         address a = following[signetor].followedWho[i].followinged;
    //         arrey[i] = a;
    //     }
    //     return arrey;
    // }

    function checkfollowed(address signetor, address followersaddress) public view returns (bool) {
        uint256 i;
        for (i = 0; i < follower[signetor].whoFollowed.length; i++) {
            if (follower[signetor].whoFollowed[i].followed == followersaddress) {
                return (true);
                console.log(i);
            }
        }
        return (false);
    }

    function findfollowerId(address signetor, address followersaddress)
        public
        view
        returns (uint256)
    {
        uint256 i = 1;
        for (i = 1; i < follower[signetor].whoFollowed.length + 1; i++) {
            if (follower[signetor].whoFollowed[i - 1].followed == followersaddress) {
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
        returns (uint256)
    {
        uint256 i = 1;
        for (i = 1; i < following[signetor].followedWho.length + 1; i++) {
            if (following[signetor].followedWho[i - 1].followinged == followingAaddress) {
                console.log("----------------------------");
                console.log("checked findFollwingId is :");
                console.log(i);
                console.log("----------------------------");
                return i;
            }
        }
    }

    function follow(address signetor) public {
        if (getOwnerNumContractOfSignetor(msg.sender) == 0) revert No__ContractCreated();
        if (getOwnerNumContractOfSignetor(signetor) == 0) revert No__ContractCreated();
        if (msg.sender == signetor) revert Can__notfollow();
        bool result = checkfollowed(signetor, msg.sender);
        if (result == true) revert Already__Followed();
        follower[signetor].followerNum++;
        followers memory flws = followers(msg.sender);
        follower[signetor].whoFollowed.push(flws);
        following[msg.sender].FollowingNum++;
        followings memory flis = followings(signetor);
        following[msg.sender].followedWho.push(flis);
        emit Followed(msg.sender, signetor);
    }

    function unfollow(address signetor) public {
        if (getOwnerNumContractOfSignetor(msg.sender) == 0) revert No__ContractCreated();
        if (getOwnerNumContractOfSignetor(signetor) == 0) revert No__ContractCreated();
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
        uint256 messageId = sSignetor.sendmessage(tokenURI_);
        uint256 time = block.timestamp;
        emit NewMessageSent(msg.sender, addr, messageId, tokenURI_, time);
        return true;
    }
}
