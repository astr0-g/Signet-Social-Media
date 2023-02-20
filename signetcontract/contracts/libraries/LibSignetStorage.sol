// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../storage/AppStorage.sol";
import "./SafeMath.sol";
import "../interfaces/IERC721.sol";
import "../interfaces/IERC1155.sol";

/*
 * @title Signet LibSignetStorage
 * @author https://outerspace.ai/
 */

library LibSignetStorage {
    bytes32 internal constant RENTAL = keccak256("signet.lib.storage");

    function getStorage() internal pure returns (AppStorage storage s) {
        bytes32 position = RENTAL;
        assembly {
            s.slot := position
        }
    }

    function register(address _user) internal returns (uint256) {
        AppStorage storage s = getStorage();
        s.ma.register[_user] = true;
        unchecked {
            ++s.cs.totalSignetorsNum;
        }
        return (s.cs.totalSignetorsNum);
    }

    function setSignetorAddress(address _signetorAddress) internal {
        AppStorage storage s = getStorage();
        s.signetorAddress = _signetorAddress;
    }

    function getSignetorAddress() internal view returns (address) {
        AppStorage storage s = getStorage();
        return (s.signetorAddress);
    }

    function getAllowedTranfer() internal view returns (bool) {
        AppStorage storage s = getStorage();
        return (s.cs.allowTranfer);
    }

    function setAllowedTranfer(bool _allowedTranfer) internal {
        AppStorage storage s = getStorage();
        s.cs.allowTranfer = _allowedTranfer;
    }

    function setValueForSendMessage(uint256 _messagePrice) internal {
        AppStorage storage s = getStorage();
        s.cs.messagePrice = _messagePrice;
    }

    function hasName(address _signetUserAddress) internal view returns (bool) {
        AppStorage storage s = getStorage();
        if (s.pm.name[_signetUserAddress].timeUpdated > 0) {
            return true;
        } else {
            return false;
        }
    }

    function modifyNameForUser(string memory _newname, address _signetUserAddress) internal {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.ps.totalName;
        }
        s.pm.name[_signetUserAddress].name = _newname;
        s.pm.name[_signetUserAddress].timeUpdated = block.timestamp;
    }

    function hasPfp(address _signetUserAddress) internal view returns (bool) {
        AppStorage storage s = getStorage();
        if (s.pm.pfp[_signetUserAddress].timeUpdated > 0) {
            return true;
        } else {
            return false;
        }
    }

    function modifyPfpForUser(
        string memory _pfp,
        address _signetUserAddress,
        uint256 _tokenId,
        address _collection,
        uint256 _typeOf
    ) internal {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.ps.totalpfp;
        }
        s.pm.pfp[_signetUserAddress].pfp = _pfp;
        s.pm.pfp[_signetUserAddress].timeUpdated = block.timestamp;
        s.pm.pfp[_signetUserAddress].tokenId = _tokenId;
        s.pm.pfp[_signetUserAddress].collection = _collection;
        s.pm.pfp[_signetUserAddress].typeOf = _typeOf;
    }

    function messageSent(address signetor) internal returns (uint256) {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.cs.totalSignetsNum;
        }
        unchecked {
            ++s.ma.numOfSignetsSent[signetor];
        }
        return (s.cs.totalSignetsNum);
    }

    function messageDelete(address signetor) internal {
        AppStorage storage s = getStorage();
        unchecked {
            --s.ma.numOfSignetsSent[signetor];
        }
    }

    function follow(address msgSender, address signetor) internal {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.fm.follower[signetor].followerNum;
        }
        s.fm.follower[signetor].whoFollowed[msgSender] = true;
        unchecked {
            ++s.fm.following[msgSender].FollowingNum;
        }
        s.fm.following[msgSender].followedWho[signetor] = true;
    }

    function unfollow(address msgSender, address signetor) internal {
        AppStorage storage s = getStorage();

        unchecked {
            --s.fm.follower[signetor].followerNum;
        }
        s.fm.follower[signetor].whoFollowed[msgSender] = false;

        unchecked {
            --s.fm.following[msgSender].FollowingNum;
        }
        s.fm.following[msgSender].followedWho[signetor] = false;
    }

    function like(address msgSender, uint256 SignetId) internal {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.fm.signetState[SignetId].likeNum;
        }
        s.fm.signetState[SignetId].likeContributors[msgSender] = true;
    }

    function unlike(address msgSender, uint256 SignetId) internal {
        AppStorage storage s = getStorage();
        unchecked {
            --s.fm.signetState[SignetId].likeNum;
        }
        s.fm.signetState[SignetId].likeContributors[msgSender] = false;
    }

    function star(address msgSender, address SignetIdOwner, uint256 SignetId) internal {
        AppStorage storage s = getStorage();
        unchecked {
            ++s.fm.Stars[SignetIdOwner];
        }
        unchecked {
            ++s.fm.signetState[SignetId].starNum;
        }
        s.fm.signetState[SignetId].starContributors.push(msgSender);
    }

    function setAppreciateAmount(uint256 _amount) internal {
        AppStorage storage s = getStorage();
        s.cs.appreciateAmount = _amount;
    }

    function setStarCommission(uint256 _starCommisionPercent) internal {
        AppStorage storage s = getStorage();
        s.cs.commission = _starCommisionPercent;
    }

    function checkfollowed(
        address signetor,
        address followersaddress
    ) internal view returns (bool) {
        AppStorage storage s = getStorage();
        return (s.fm.follower[signetor].whoFollowed[followersaddress]);
    }

    function checklikeable(
        address SignetIdOwner,
        uint256 SignetId
    ) internal view returns (bool result) {
        AppStorage storage s = getStorage();
        if (SignetId <= s.cs.totalSignetsNum) {
            if (s.cs.totalSignetsNum != 0) {
                if (SignetId != 0) {
                    if (IERC721(s.signetorAddress).ownerOf(SignetId) == SignetIdOwner) {
                        return (true);
                    }
                }
            }
        } else {
            return (false);
        }
    }

    function checkName(address _signetUserAddress) internal view returns (string memory) {
        AppStorage storage s = getStorage();
        if (s.pm.name[_signetUserAddress].timeUpdated > 0) {
            return (s.pm.name[_signetUserAddress].name);
        } else {
            return "You seeing this message is becuase this address don't have any name created!";
        }
    }

    function checkPfp(
        address _signetUserAddress
    ) internal view returns (string memory, address, uint256, uint256) {
        AppStorage storage s = getStorage();
        if (s.pm.pfp[_signetUserAddress].timeUpdated > 0) {
            return (
                s.pm.pfp[_signetUserAddress].pfp,
                s.pm.pfp[_signetUserAddress].collection,
                s.pm.pfp[_signetUserAddress].tokenId,
                s.pm.pfp[_signetUserAddress].typeOf
            );
        } else {
            return (
                "You seeing this message is becuase this address don't have any pfp created!",
                address(0),
                0,
                0
            );
        }
    }

    function checkNameAddress(string memory _name) internal view returns (bool, address) {
        AppStorage storage s = getStorage();
        uint i = 0;
        do {
            if (
                keccak256(abi.encodePacked(s.pm.name[s.cs.registerdUserArray[i]].name)) ==
                keccak256(abi.encodePacked(_name))
            ) {
                return (true, s.cs.registerdUserArray[i]);
            }
            unchecked {
                ++i;
            }
        } while (i < s.cs.registerdUserArray.length + 1);
        return (false, address(0));
    }

    function checkNameAvalable(string memory _name) internal view returns (bool) {
        AppStorage storage s = getStorage();
        return (!s.pm.nameused[_name]);
    }

    function getValueForSendMessage() internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.cs.messagePrice);
    }

    function getTotalSignetorNum() internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.cs.totalSignetorsNum);
    }

    function getAppreciateAmount() internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.cs.appreciateAmount);
    }

    function getStarCommission() internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.cs.commission);
    }

    function checkliked(uint256 signetID, address likedAddress) internal view returns (bool) {
        AppStorage storage s = getStorage();
        return (s.fm.signetState[signetID].likeContributors[likedAddress]);
    }

    function getTotalSignetsNum() internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.cs.totalSignetsNum);
    }

    function getFollowingsNum(address signetor) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.fm.following[signetor].FollowingNum);
    }

    function getFollowersNum(address signetor) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.fm.follower[signetor].followerNum);
    }

    function getStaredNumForSignetor(address signetor) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.fm.Stars[signetor]);
    }

    function getLikedNum(uint256 signetId) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.fm.signetState[signetId].likeNum);
    }

    function getStaredNum(uint256 signetId) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.fm.signetState[signetId].starNum);
    }

    function getStarContributor(uint256 SignetId) internal view returns (address[] memory) {
        AppStorage storage s = getStorage();
        return (s.fm.signetState[SignetId].starContributors);
    }

    function checkRegistered(address _user) internal view returns (bool) {
        AppStorage storage s = getStorage();
        return (s.ma.register[_user]);
    }

    function checkNumOfSignetsSent(address _user) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        return (s.ma.numOfSignetsSent[_user]);
    }
}
