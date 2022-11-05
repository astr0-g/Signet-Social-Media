// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/*
 * @title Signetors Controllor
 * @author astro
 */

interface ISignetFollowSys {
    function messageSender(address msgSender) external returns (uint256);

    function setSignetControllor(address _signetControllor) external;

    function checkfollowed(address signetor, address followersaddress)
        external
        view
        returns (bool);

    function checkliked(uint256 signetID, address likedAddress) external view returns (bool);

    function findfollowerId(address signetor, address followersaddress)
        external
        view
        returns (uint256 id);

    function findFollwingId(address signetor, address followingAaddress)
        external
        view
        returns (uint256 id);

    function findLikeId(uint256 signetID, address likedAddress) external view returns (uint256 id);

    function follow(address msgSender, address signetor) external;

    function unfollow(address msgSender, address signetor) external;

    function like(
        address msgSender,
        uint256 SignetId,
        address SignetIdOwner
    ) external;

    function unlike(
        address msgSender,
        uint256 SignetId,
        address SignetIdOwner
    ) external;

    function star(
        address msgSender,
        address SignetIdOwner,
        uint256 SignetId
    ) external payable;

    function getFollowingsNum(address signetor) external view returns (uint256);

    function getFollowersNum(address signetor) external view returns (uint256);

    function getFollowers(address signetor) external view returns (address[] memory);

    function getFollowings(address signetor) external view returns (address[] memory);

    function getStaredNumForSignetor(address SignetorAddress) external view returns (uint256);

    function getLikedNum(uint256 SignetId) external view returns (uint256);

    function getStaredNum(uint256 SignetId) external view returns (uint256);

    function getStarContributor(uint256 SignetId) external view returns (address[] memory);

    function getLikeContributor(uint256 SignetId) external view returns (address[] memory);
}
