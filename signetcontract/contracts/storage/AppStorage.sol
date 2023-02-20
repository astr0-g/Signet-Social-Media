// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "./ProfileSysStorage.sol";
import "./FollowSysStorage.sol";
import "./ControllorStorage.sol";

struct AppStorage {
    profileStruct ps;
    nameStruct ns;
    pfpStruct pfps;
    profilemap pm;
    Followers flwr;
    Following flwi;
    signetinfo signetinfo;
    followMap fm;
    mapSignetAddress ma;
    controllorStorage cs;
    bool locked;
    address signetorAddress;
    address priceFeedAddress;
}
