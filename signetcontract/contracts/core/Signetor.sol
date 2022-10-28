// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error Not__FromSignetControllors();

contract Signetor is ERC721, Ownable {
    address public SignetorContractAddress;
    address public SignetControllors;
    using Strings for uint256;

    uint256 public token_Id;
    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    // Base URI
    string private _baseURIextended;

    constructor(
        string memory _name,
        string memory _symbol,
        address owner,
        address signetControllors
    ) ERC721(_name, _symbol) {
        setAddress();
        transferOwnership(owner);
        SignetControllors = signetControllors;
    }

    function setAddress() private {
        SignetorContractAddress = address(this);
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        _baseURIextended = baseURI_;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }

    function sendmessage(string memory tokenURI_) public returns (uint256) {
        if (msg.sender != SignetControllors) revert Not__FromSignetControllors();
        token_Id++;
        address owneraddress = owner();
        _mint(owneraddress, token_Id);
        _setTokenURI(token_Id, tokenURI_);
        return (token_Id);
    }

    // function totalmessage() public view returns (uint256) {
    //     uint256 tmessage = totalSupply();
    //     return totalmessage;
    // }
}
