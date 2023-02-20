// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/*
 * @title Signetors Controllor
 * @author astro
 */

interface TransferControlFacet {
    function getAllowedTranfer() external view returns (bool);
}
