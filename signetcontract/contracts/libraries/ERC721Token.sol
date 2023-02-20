// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Tyskos is ERC721, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    string public uriPrefix =
        "https://uetar.mypinata.cloud/ipfs/QmQ5z34vwupyrE5r5vW6EVwZ2CxrPSkfniKKZyWUSWGpHU/";
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    uint256 public publicMintCost = 0;
    uint256 public preMintCost = 0.045 ether;
    uint256 public maxSupply = 1777;
    uint256 public maxMintAmountPerTx = 100;

    //bool public paused = false;
    bool public preMintPaused = true;
    bool public publicMintPaused = false;
    bool public revealed = true;

    uint256 preMintLimit = 3;
    uint256 publicMintLimit = 10;
    mapping(address => uint256) public preMintCount;
    mapping(address => uint256) public publicMintCount;

    mapping(address => bool) public whitelisted;

    constructor() ERC721("Tyskos", "Tyskos") {
        setHiddenMetadataUri(
            "https://uetar.mypinata.cloud/ipfs/QmWaAyjjSP2UKHARbUQWakpCQQ9a7dszwhWfZPfCWmHWZu"
        );
        mintForAddress(2, 0xa4D411536cbC9c70AdCC966b3dBd755372Fd6CFE);
    }

    modifier mintCompliance(uint256 _mintAmount) {
        require(_mintAmount > 0 && _mintAmount <= maxMintAmountPerTx, "Invalid mint amount!");
        require(supply.current() + _mintAmount <= maxSupply, "Max supply exceeded!");
        _;
    }

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }

    function publicMint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) {
        require(!publicMintPaused, "Public mint is paused!");
        require(msg.value >= publicMintCost * _mintAmount, "Insufficient funds!");
        require(
            publicMintCount[msg.sender] + _mintAmount <= publicMintLimit,
            "public mint limit exceeded"
        );

        _mintLoop(msg.sender, _mintAmount);
        publicMintCount[msg.sender] += _mintAmount;
    }

    function whitelistMint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) {
        require(!preMintPaused, "Premint paused is paused!");
        require(msg.value >= preMintCost * _mintAmount, "Insufficient funds!");
        require(whitelisted[msg.sender], "sender is not in whitelist");
        require(preMintCount[msg.sender] + _mintAmount <= preMintLimit, "premint limit exceeded");

        _mintLoop(msg.sender, _mintAmount);
        preMintCount[msg.sender] += _mintAmount;
    }

    function mintForAddress(
        uint256 _mintAmount,
        address _receiver
    ) public mintCompliance(_mintAmount) onlyOwner {
        _mintLoop(_receiver, _mintAmount);
    }

    function getPreMintCount() public view returns (uint256) {
        return preMintCount[msg.sender];
    }

    function getPublicMintCount() public view returns (uint256) {
        return publicMintCount[msg.sender];
    }

    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
        uint256 currentTokenId = 1;
        uint256 ownedTokenIndex = 0;

        while (ownedTokenIndex < ownerTokenCount && currentTokenId <= maxSupply) {
            address currentTokenOwner = ownerOf(currentTokenId);

            if (currentTokenOwner == _owner) {
                ownedTokenIds[ownedTokenIndex] = currentTokenId;

                ownedTokenIndex++;
            }

            currentTokenId++;
        }

        return ownedTokenIds;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");

        if (revealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(abi.encodePacked(currentBaseURI, (_tokenId - 1).toString(), uriSuffix))
                : "";
    }

    function setpreMintPaused(bool _state) public onlyOwner {
        preMintPaused = _state;
    }

    function setPublicMintPaused(bool _state) public onlyOwner {
        publicMintPaused = _state;
    }

    function setRevealed(bool _state) public onlyOwner {
        revealed = _state;
    }

    function setPublicCost(uint256 _cost) public onlyOwner {
        publicMintCost = _cost;
    }

    function setPreCost(uint256 _cost) public onlyOwner {
        preMintCost = _cost;
    }

    function whitelistUser(address _user) external onlyOwner {
        whitelisted[_user] = true;
    }

    function removeWhitelistUser(address _user) external onlyOwner {
        whitelisted[_user] = false;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx) public onlyOwner {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setHiddenMetadataUri(string memory _hiddenMetadataUri) public onlyOwner {
        hiddenMetadataUri = _hiddenMetadataUri;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyOwner {
        uriPrefix = _uriPrefix;
    }

    function setUriSuffix(string memory _uriSuffix) public onlyOwner {
        uriSuffix = _uriSuffix;
    }

    function withdraw() public onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }

    function _mintLoop(address _receiver, uint256 _mintAmount) internal {
        for (uint256 i = 0; i < _mintAmount; i++) {
            supply.increment();
            _safeMint(_receiver, supply.current());
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return uriPrefix;
    }
}
