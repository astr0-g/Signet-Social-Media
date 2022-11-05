// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

/*
 * @title Signetors SignetProfileSys
 * @author astro
 */
error name__IsTooLong();
error name__IsNotAvalable();
error no__NameCreated();
error name__Created();
error not__FromSignetControllor();

contract SignetProfileSys is ReentrancyGuard {
    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */
    address public signetControllor;
    address public owner;
    uint256 public totalName;
    uint256 public totalpfp;
    struct nameStruct {
        string name;
        uint256 timeUpdated;
        address owner;
    }
    mapping(uint256 => nameStruct) public name;

    struct pfpStruct {
        string pfp;
        uint256 timeUpdated;
        address owner;
    }
    mapping(uint256 => pfpStruct) public pfp;

    event ProfileUpdated(address indexed messageSender, string indexed _name, string indexed _pfp);

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

    function checkName(address signetUserAddress) public view returns (string memory) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (name[i].owner == signetUserAddress) {
                return (name[i].name);
            }
        }
        return "You seeing this message is becuase this address don't have any name created!";
    }

    function checkNameAvalable(string memory _name) public view returns (bool) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (keccak256(abi.encodePacked(name[i].name)) == keccak256(abi.encodePacked(_name))) {
                return false;
            }
        }
        return true;
    }

    function findNameId(string memory _name) public view returns (uint256 id) {
        for (uint256 i = 0; i < totalName + 1; i++) {
            if (keccak256(abi.encodePacked(name[i].name)) == keccak256(abi.encodePacked(_name))) {
                return (i);
            }
        }
        return (0);
    }

    function modifyNameForUser(string memory _newname, address signetUserAddress)
        external
        fromSignetControllor
    {
        if (bytes(_newname).length > 12) revert name__IsTooLong();
        if (checkNameAvalable(_newname) == false) revert name__IsNotAvalable();

        if (hasName(signetUserAddress) == false) {
            totalName++;
            name[totalName].name = _newname;
            name[totalName].timeUpdated = block.timestamp;
            name[totalName].owner = signetUserAddress;
            emit ProfileUpdated(signetUserAddress, _newname, "");
        }

        if (hasName(signetUserAddress) == true) {
            string memory _oldname = checkName(signetUserAddress);
            uint256 oldNameId = findNameId(_oldname);
            name[oldNameId].name = _newname;
            name[oldNameId].timeUpdated = block.timestamp;
            emit ProfileUpdated(signetUserAddress, _newname, "");
        }
    }

    function hasPfp(address signetUserAddress) public view returns (bool) {
        for (uint256 i = 0; i < totalpfp + 1; i++) {
            if (pfp[i].owner == signetUserAddress) {
                return true;
            }
        }
        return false;
    }

    function checkPfp(address signetUserAddress) public view returns (string memory) {
        for (uint256 i = 0; i < totalpfp + 1; i++) {
            if (pfp[i].owner == signetUserAddress) {
                return (pfp[i].pfp);
            }
        }
        return "You seeing this message is becuase this address don't have any pfp created!";
    }

    function findPfpId(string memory _pfp) public view returns (uint256 id) {
        for (uint256 i = 0; i < totalpfp + 1; i++) {
            if (keccak256(abi.encodePacked(pfp[i].pfp)) == keccak256(abi.encodePacked(_pfp))) {
                return (i);
            }
        }
        return (0);
    }

    function modifyPfpForUser(string memory _pfp, address signetUserAddress)
        external
        fromSignetControllor
    {
        if (hasPfp(signetUserAddress) == false) {
            totalpfp++;
            pfp[totalpfp].pfp = _pfp;
            pfp[totalpfp].timeUpdated = block.timestamp;
            pfp[totalpfp].owner = signetUserAddress;
            emit ProfileUpdated(signetUserAddress, "", _pfp);
        }

        if (hasPfp(signetUserAddress) == true) {
            string memory _oldPfp = checkPfp(signetUserAddress);
            uint256 oldPfpId = findPfpId(_oldPfp);
            pfp[oldPfpId].pfp = _pfp;
            pfp[oldPfpId].timeUpdated = block.timestamp;
            emit ProfileUpdated(signetUserAddress, "", _pfp);
        }
    }
}
