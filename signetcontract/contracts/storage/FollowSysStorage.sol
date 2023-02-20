// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

//followers struct
struct Followers {
    uint256 followerNum;
    mapping(address => bool) whoFollowed;
}

//following struct

struct Following {
    uint256 FollowingNum;
    mapping(address => bool) followedWho;
}

//star struct

struct signetinfo {
    uint256 likeNum;
    uint256 starNum;
    // address SignetIdOwner;
    address[] starContributors;
    mapping(address => bool) likeContributors;
}

struct followMap {
    mapping(address => Followers) follower;
    mapping(address => Following) following;
    mapping(uint256 => signetinfo) signetState;
    mapping(address => uint256) Stars;
}
