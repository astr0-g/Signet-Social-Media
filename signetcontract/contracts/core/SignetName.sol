// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

/*
 * @title Signetors Controllor
 * @author astro
 */
error name__IsTooLong();
error name__IsNotAvalable();
error no__NameCreated();
error name__Created();
error not__FromSignetControllor();

contract SignetName is ReentrancyGuard {
    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */
    address public signetControllor;
    address public owner;
    uint256 public totalName;
    struct nameStruct {
        string name;
        uint256 timeUpdated;
        address owner;
    }
    mapping(uint256 => nameStruct) public name;

    constructor() {
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

    function hasName(address signetUserAddress) public view returns (bool) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (name[i].owner == signetUserAddress) {
                return true;
            }
        }
        return false;
    }

    function checkName(address signetUserAddress)
        public
        view
        returns (string memory)
    {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (name[i].owner == signetUserAddress) {
                return (name[i].name);
            }
        }
        return
            "You seeing this message is becuase this address don't have any name created!";
    }

    function checkNameAvalable(string memory _name) public view returns (bool) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (
                keccak256(abi.encodePacked(name[i].name)) ==
                keccak256(abi.encodePacked(_name))
            ) {
                return false;
            }
        }
        return true;
    }

    function findNameId(string memory _name) public view returns (uint256 id) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (
                keccak256(abi.encodePacked(name[i].name)) ==
                keccak256(abi.encodePacked(_name))
            ) {
                return (i);
            }
        }
        return (0);
    }

    function createNameForNewUser(
        string memory _newname,
        address signetUserAddress
    ) external fromSignetControllor {
        if (hasName(signetUserAddress) == true) revert name__Created();
        if (bytes(_newname).length > 12) revert name__IsTooLong();
        if (checkNameAvalable(_newname) == false) revert name__IsNotAvalable();
        totalName++;
        name[totalName].name = _newname;
        name[totalName].timeUpdated = block.timestamp;
        name[totalName].owner = signetUserAddress;
    }

    function changeNameForUser(
        string memory _newname,
        address signetUserAddress
    ) external fromSignetControllor {
        if (hasName(signetUserAddress) == false) revert no__NameCreated();
        if (bytes(_newname).length > 12) revert name__IsTooLong();
        if (checkNameAvalable(_newname) == false) revert name__IsNotAvalable();
        string memory _oldname = checkName(signetUserAddress);
        uint256 oldNameId = findNameId(_oldname);
        name[oldNameId].name = _newname;
        name[oldNameId].timeUpdated = block.timestamp;
    }
}
