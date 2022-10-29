// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/ISignetName.sol";
import "../interfaces/ISignetFollowSystem.sol";
import "./Signetors.sol";
import "./PriceConverter.sol";
import "hardhat/console.sol";
/*
 * @title Signetors Controllor
 * @author astro
 */
error Contract__Created();
error Wrong__Contract();
error Already__Followed();
error Never__Followed();
error Can__notfollow();
error No__ContractCreated();
error Not__EnoughAmount();
error Wrong__SignetId();
error Wrong__UserSubmitted();

contract SignetControllor is ReentrancyGuard, Ownable {
    Signetor private sSignetor;
    Signetors ST;
    Signetors private STCrator;
    using PriceConverter for uint256;
    AggregatorV3Interface public priceFeed;
    uint256 public TotalSignetorsNum;

    address private signetname;
    address private signetFollowSystem;
    struct ownerstruct {
        address owner;
    }

    //followers struct

    mapping(address => ownerstruct) public collectionContractList;

    event CollectionCreated(
        address indexed creatoraddress,
        address indexed collectionaddress
    );
    event Followed(address indexed isfollowing, address indexed isfollowed);
    event UnFollowed(
        address indexed isunfollowing,
        address indexed isunfollowed
    );
    event NewMessageSent(
        address indexed messageSender,
        address indexed signetoraddress,
        uint256 messageId,
        uint256 signetId,
        string tokenURI_,
        uint256 time
    );
    event Liked(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );
    event Stared(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );
    event Unlike(
        address indexed messageSender,
        uint256 signetId,
        address indexed signetoraddress,
        uint256 time
    );

    constructor(address _signetName, address _signetFollowSystem) {
        ST = new Signetors();
        STCrator = Signetors(ST.ContractAddress());
        signetname = _signetName;
        signetFollowSystem = _signetFollowSystem;
    }

    /*
     * @notice Method creating collection.
     * @param creating non-copyright collection.
     * @param creating copyright collection.
     * @param store all infos into contract.
     */
    modifier Joined() {
        if (getOwnerNumContractOfSignetor(msg.sender) == 0)
            revert No__ContractCreated();
        _;
    }

    // function _init() public onlyOwner {
    //     ISignetFollowSystem(signetFollowSystem).setSignetControllor(
    //         address(this)
    //     );
    //     ISignetName(signetname).setSignetControllor(address(this));
    // }

    function controllorCreateSignetor(
        string memory _name,
        string memory _symbol
    ) external {
        if (getOwnerNumContractOfSignetor(msg.sender) != 0)
            revert Contract__Created();
        (, address b, ) = STCrator.createSignetor(_name, _symbol, msg.sender);
        TotalSignetorsNum++;
        ownerstruct memory OWS = ownerstruct(msg.sender);
        collectionContractList[b] = OWS;
        emit CollectionCreated(msg.sender, b);
    }

    function sendmessage(address addr, string memory tokenURI_)
        public
        Joined
        returns (bool success)
    {
        address ownercontract = getOwnerContractForSignetor(msg.sender);
        if (addr != ownercontract) revert Wrong__Contract();
        sSignetor = Signetor(addr);
        uint256 messageId = sSignetor.sendmessage(tokenURI_);
        uint256 time = block.timestamp;
        uint256 signetId = ISignetFollowSystem(signetFollowSystem)
            .messageSender(msg.sender);
        emit NewMessageSent(
            msg.sender,
            addr,
            messageId,
            signetId,
            tokenURI_,
            time
        );
        return true;
    }

    function follow(address signetor) public Joined {
        ISignetFollowSystem(signetFollowSystem).follow(msg.sender, signetor);
    }

    function unfollow(address signetor) public Joined {
        ISignetFollowSystem(signetFollowSystem).unfollow(msg.sender, signetor);
    }

    function like(address SignetIdOwner, uint256 SignetId) public Joined {
        ISignetFollowSystem(signetFollowSystem).like(
            msg.sender,
            SignetId,
            SignetIdOwner
        );
    }

    function unlike(address SignetIdOwner, uint256 SignetId) public Joined {
        ISignetFollowSystem(signetFollowSystem).unlike(
            msg.sender,
            SignetId,
            SignetIdOwner
        );
    }

    function star(address SignetIdOwner, uint256 SignetId)
        public
        payable
        Joined
    {
        ISignetFollowSystem(signetFollowSystem).star{value: msg.value}(
            msg.sender,
            SignetIdOwner,
            SignetId
        );
    }

    function createNameForNewUser(string memory _newname) public {
        ISignetName(signetname).createNameForNewUser(_newname, msg.sender);
    }

    function changeNameForUser(string memory _newname) public {
        ISignetName(signetname).changeNameForUser(_newname, msg.sender);
    }

    function getOwnerContractForSignetor(address contractOwner)
        public
        view
        returns (address)
    {
        (, address b, ) = STCrator.getresponse(0, contractOwner);
        return b;
    }

    function getOwnerNumContractOfSignetor(address contractOwner)
        public
        view
        returns (uint256)
    {
        uint256 a = STCrator.s_creatorCollection(contractOwner);
        return a;
    }

    function checkfollowed(address signetor, address followersaddress)
        external
        view
        returns (bool)
    {
        return (
            ISignetFollowSystem(signetFollowSystem).checkfollowed(
                signetor,
                followersaddress
            )
        );
    }

    function checkliked(uint256 signetID, address likedAddress)
        external
        view
        returns (bool)
    {
        return (
            ISignetFollowSystem(signetFollowSystem).checkliked(
                signetID,
                likedAddress
            )
        );
    }

    function getFollowersNum(address signetor) public view returns (uint256) {
        return (
            ISignetFollowSystem(signetFollowSystem).getFollowersNum(signetor)
        );
    }

    function getFollowingsNum(address signetor) public view returns (uint256) {
        return (
            ISignetFollowSystem(signetFollowSystem).getFollowingsNum(signetor)
        );
    }

    function getFollowers(address signetor)
        public
        view
        returns (address[] memory)
    {
        return (ISignetFollowSystem(signetFollowSystem).getFollowers(signetor));
    }

    function getFollowings(address signetor)
        public
        view
        returns (address[] memory)
    {
        return (
            ISignetFollowSystem(signetFollowSystem).getFollowings(signetor)
        );
    }

    function getStaredNum(address SignetorAddress) public view returns (uint256) {
        return (ISignetFollowSystem(signetFollowSystem).getStaredNum(SignetorAddress));
    }

    function getLikedNum(uint256 SignetId) public view returns (uint256) {
        return (ISignetFollowSystem(signetFollowSystem).getLikedNum(SignetId));
    }

    function getStarContributor(uint256 SignetId)
        public
        view
        returns (address[] memory)
    {
        return (
            ISignetFollowSystem(signetFollowSystem).getStarContributor(SignetId)
        );
    }

    function getLikeContributor(uint256 SignetId)
        public
        view
        returns (address[] memory)
    {
        return (
            ISignetFollowSystem(signetFollowSystem).getLikeContributor(SignetId)
        );
    }

    function hasName(address signetUserAddress) public view returns (bool) {
        return (ISignetName(signetname).hasName(signetUserAddress));
    }

    function checkName(address signetUserAddress)
        public
        view
        returns (string memory)
    {
        return (ISignetName(signetname).checkName(signetUserAddress));
    }

    function checkNameAvalable(string memory _name) public view returns (bool) {
        return (ISignetName(signetname).checkNameAvalable(_name));
    }
}
