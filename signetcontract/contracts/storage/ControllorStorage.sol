// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

struct controllorStorage {
    uint256 totalSignetorsNum;
    uint256 totalSignetsNum;
    uint256 appreciateAmount;
    uint256 commission;
    uint256 messagePrice;
    address signetprofileSys;
    address signetFollowSys;
    bool allowTranfer;
    address[] registerdUserArray;
}
struct mapSignetAddress {
    mapping(address => bool) register;
    mapping(address => uint256) numOfSignetsSent;
}
