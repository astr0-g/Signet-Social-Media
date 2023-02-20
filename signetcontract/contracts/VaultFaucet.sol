// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Signetor.sol";
import "./libraries/LibDiamond.sol";
import "./libraries/LibSignetStorage.sol";
import "./libraries/LibPriceConverter.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/*
 * @title Signet Vault Facet
 * @author astro - outerspace.ai
 */

error Not_Owner();

contract VaultFaucet {
    AppStorage s;

    modifier onlyOwner() {
        address _owner = owner();
        if (_owner != msg.sender) revert Not_Owner();
        _;
    }

    modifier noReentrant() {
        require(!s.locked, "Reentrancy Protection");
        s.locked = true;
        _;
        s.locked = false;
    }

    // @dev
    // this function limit user transfer their signet or sell their signet.
    function _init(address _priceFeedAddress) public onlyOwner {
        Signetor st;
        st = new Signetor("Signetor", "ST", address(this));
        address newContractAddress = st.SignetorContractAddress();
        setPriceFeedAddress(_priceFeedAddress);
        LibSignetStorage.setSignetorAddress(newContractAddress);
    }

    function setAllowedTranfer() public onlyOwner {
        LibSignetStorage.setAllowedTranfer(true);
    }

    function setNotAllowedTranfer() public onlyOwner {
        LibSignetStorage.setAllowedTranfer(false);
    }

    function setStarAmountToSend(uint256 _amountInDollar) public onlyOwner {
        require(_amountInDollar > 0, "Wrong Arguments Given");
        LibSignetStorage.setAppreciateAmount(_amountInDollar * 10 ** 18);
    }

    function setStarCommision(uint256 _starCommisionPercent) public onlyOwner {
        require(_starCommisionPercent < 100, "Wrong Arguments Given");
        LibSignetStorage.setStarCommission(_starCommisionPercent);
    }

    function setValueForSendMessage(uint256 _messagePriceInWei) public onlyOwner {
        require(_messagePriceInWei >= 0, "Wrong Arguments Given");
        LibSignetStorage.setValueForSendMessage(_messagePriceInWei);
    }

    function setPriceFeedAddress(address _priceFeedAddress) public onlyOwner {
        require(_priceFeedAddress != address(0), "Wrong Arguments Given");
        LibPriceConverter.setPriceFeedAddress(_priceFeedAddress);
    }

    // @dev
    // this function helps people who accidentally transfer ERC20 token to our contract.
    function withdrawERC20Token(
        address _erc20ContractAddress,
        uint256 _amount,
        address _to
    ) external onlyOwner {
        IERC20(_erc20ContractAddress).approve(address(this), _amount);
        bool callSuccess = IERC20(_erc20ContractAddress).transferFrom(address(this), _to, _amount);
        require(callSuccess, "Transfer failed");
    }

    // @dev
    // this function helps people who accidentally transfer ERC721 token to our contract.
    function withdrawERC721Token(
        address _erc721ContractAddress,
        uint256 _tokenId,
        address _to
    ) external onlyOwner {
        IERC721(_erc721ContractAddress).approve(_to, _tokenId);
        IERC721(_erc721ContractAddress).safeTransferFrom(address(this), _to, _tokenId);
    }

    // @dev
    // this function helps people who accidentally transfer ERC1155 token to our contract.
    function withdrawERC1155Token(
        address _erc1155ContractAddress,
        uint256 _id,
        uint256 _amount,
        address _to
    ) external onlyOwner {
        IERC1155(_erc1155ContractAddress).safeTransferFrom(address(this), _to, _id, _amount, "");
    }

    function withdrawFunds(uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount);
        (bool callSuccess, ) = payable(msg.sender).call{value: _amount}("");
        require(callSuccess, "Call failed");
    }

    function checkRegistered(address _user) public view returns (bool) {
        return (LibSignetStorage.checkRegistered(_user));
    }

    function checkNumOfSignetsSent(address _user) external view returns (uint256) {
        return (LibSignetStorage.checkNumOfSignetsSent(_user));
    }

    function getTotalSignetsNum() external view returns (uint256) {
        return (LibSignetStorage.getTotalSignetsNum());
    }

    function getTotalSignetorNum() public view returns (uint256) {
        return (LibSignetStorage.getTotalSignetorNum());
    }

    function getPriceFeedAddress() public view returns (address) {
        return (LibPriceConverter.getPriceFeedAddress());
    }

    function getValueForSendMessage() public view returns (uint256) {
        return (LibSignetStorage.getValueForSendMessage());
    }

    function getAppreciateAmount() public view returns (string memory) {
        uint256 appreciateAmount = LibSignetStorage.getAppreciateAmount() / (10 ** 18);
        return
            appreciateAmount > 0
                ? string(abi.encodePacked(Strings.toString(appreciateAmount), "$"))
                : "0$";
    }

    function getStarCommission() public view returns (string memory) {
        uint256 commisionPercent = LibSignetStorage.getStarCommission();
        return
            commisionPercent > 0
                ? string(abi.encodePacked(Strings.toString(commisionPercent), "%"))
                : "0%";
    }

    function getAllowedTranfer() public view returns (bool) {
        return (LibSignetStorage.getAllowedTranfer());
    }

    function owner() internal view returns (address owner_) {
        owner_ = LibDiamond.contractOwner();
    }
}
