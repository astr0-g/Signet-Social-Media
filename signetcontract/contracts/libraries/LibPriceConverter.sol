// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "../storage/AppStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library LibPriceConverter {
    bytes32 internal constant RENTAL = keccak256("signet.lib.storage");

    function getStorage() internal pure returns (AppStorage storage s) {
        bytes32 position = RENTAL;
        assembly {
            s.slot := position
        }
    }

    function getPrice(address _priceFeedAddress) internal view returns (uint256) {
        (, int256 answer, , , ) = AggregatorV3Interface(_priceFeedAddress).latestRoundData();
        return uint256(answer * 10000000000);
    }

    function getConversionRate(uint256 ethAmount) internal view returns (uint256) {
        AppStorage storage s = getStorage();
        uint256 ethPrice = getPrice(s.priceFeedAddress);
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        return ethAmountInUsd;
    }

    function setPriceFeedAddress(address _priceFeedAddress) internal {
        AppStorage storage s = getStorage();
        s.priceFeedAddress = _priceFeedAddress;
    }

    function getPriceFeedAddress() internal view returns (address) {
        AppStorage storage s = getStorage();
        return (s.priceFeedAddress);
    }
}
