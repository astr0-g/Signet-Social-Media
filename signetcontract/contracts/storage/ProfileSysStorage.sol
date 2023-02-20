// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

struct profileStruct {
    uint256 totalName;
    uint256 totalpfp;
}
struct nameStruct {
    string name;
    uint256 timeUpdated;
}

struct pfpStruct {
    string pfp;
    uint256 timeUpdated;
    address collection;
    uint256 tokenId;
    uint256 typeOf;
}

struct profilemap {
    mapping(address => pfpStruct) pfp;
    mapping(address => nameStruct) name;
    mapping(string => bool) nameused;
}
