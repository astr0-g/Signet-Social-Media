// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ISignetor {
    function sendMessage(
        address messageSender,
        string memory tokenURI_
    ) external returns (uint256);

    function deleteMessage(address messageOwner, uint256 tokenId) external;
}
