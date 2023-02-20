// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./libraries/LibDiamond.sol";
import "./libraries/LibSignetStorage.sol";

/*
 * @title Signet Profile Facet
 * @author astro - outerspace.ai
 */

error name__IsTooLong();
error name__IsNotAvalable();
error no__NameCreated();
error name__Created();
error Un__Registered();
error Not_Owner();
error Wrong__Type();

contract ProfileFacet {
    AppStorage s;

    modifier onlyOwner() {
        address _owner = LibDiamond.contractOwner();
        if (_owner != msg.sender) revert Not_Owner();
        _;
    }

    modifier noReentrant() {
        require(!s.locked, "Reentrancy Protection");
        s.locked = true;
        _;
        s.locked = false;
    }

    modifier Registered() {
        if (LibSignetStorage.checkRegistered(msg.sender) == false) revert Un__Registered();
        _;
    }
    event ProfileUpdated(address indexed userAddress, string _name, string _pfp);

    function hasName(address signetUserAddress) public view returns (bool) {
        return (LibSignetStorage.hasName(signetUserAddress));
    }

    function checkName(address signetUserAddress) public view returns (string memory) {
        return (LibSignetStorage.checkName(signetUserAddress));
    }

    function checkNameAvalable(string memory _name) public view returns (bool) {
        return (LibSignetStorage.checkNameAvalable(_name));
    }

    function checkNameAddress(string memory _name) public view returns (bool, address) {
        return (LibSignetStorage.checkNameAddress(_name));
    }

    function modifyNameForUser(string memory _newname) external Registered {
        if (bytes(_newname).length > 15) revert name__IsTooLong();
        if (checkNameAvalable(_newname) == false) revert name__IsNotAvalable();
        LibSignetStorage.modifyNameForUser(_newname, msg.sender);
        emit ProfileUpdated(msg.sender, _newname, "");
    }

    function hasPfp(address signetUserAddress) public view returns (bool) {
        return (LibSignetStorage.hasPfp(signetUserAddress));
    }

    function checkPfp(address signetUserAddress) public view returns (string memory) {
        (string memory a, address b, uint256 c, uint256 d) = LibSignetStorage.checkPfp(
            signetUserAddress
        );
        if (d == 721) {
            if (IERC721(b).ownerOf(c) == signetUserAddress) {
                return a;
            } else {
                return
                    "You seeing this message is becuase this address don't have any pfp created!";
            }
        } else if (d == 1155) {
            if (IERC1155(b).balanceOf(signetUserAddress, c) != 0) {
                return a;
            } else {
                return
                    "You seeing this message is becuase this address don't have any pfp created!";
            }
        } else {
            return "You seeing this message is becuase this address don't have any pfp created!";
        }
    }

    function modifyPfpForUser(
        string memory _pfp,
        address _collection,
        uint256 _tokenId,
        uint256 _typeOf
    ) external Registered {
        if (_typeOf != 721 && _typeOf != 1155) revert Wrong__Type();
        if (_typeOf == 721) {
            if (IERC721(_collection).ownerOf(_tokenId) == msg.sender) {
                LibSignetStorage.modifyPfpForUser(
                    _pfp,
                    msg.sender,
                    _tokenId,
                    _collection,
                    _typeOf
                );
                emit ProfileUpdated(msg.sender, "", _pfp);
            }
        }
        if (_typeOf == 1155) {
            if (IERC1155(_collection).balanceOf(msg.sender, _tokenId) > 0) {
                LibSignetStorage.modifyPfpForUser(
                    _pfp,
                    msg.sender,
                    _tokenId,
                    _collection,
                    _typeOf
                );
                emit ProfileUpdated(msg.sender, "", _pfp);
            }
        }
    }
}
