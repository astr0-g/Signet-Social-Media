// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/*
 * @title Signetors Controllor
 * @author astro
 */
interface ISignetProfileSys {
    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */
    function setSignetControllor(address _signetControllor) external;

    function hasName(address signetUserAddress) external view returns (bool);

    function checkName(address signetUserAddress)
        external
        view
        returns (string memory);

    function checkNameAvalable(string memory _name)
        external
        view
        returns (bool);

    function findNameId(string memory _name) external view returns (uint256 id);

    function createNameForNewUser(
        string memory _newname,
        address signetUserAddress
    ) external;

    function changeNameForUser(
        string memory _newname,
        address signetUserAddress
    ) external;
}
