// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


import "./ECDSA.sol";

library LibVerify {

    function _domainSeparatorV4(
        bytes32 hashedName,
        bytes32 hashedVersion,
        bytes32 typeHash
    ) internal view returns (bytes32) {
        return _buildDomainSeparator(typeHash, hashedName, hashedVersion);
    }

    function _hash(
        bytes32 hashedName,
        bytes32 hashedVersion,
        bytes32 typeHash,
        address from,
        address to,
        string calldata notice
    ) internal view returns (bytes32) {
        return
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        keccak256("signetAction(address from,address to,string notice)"),
                        from,
                        to,
                        keccak256(bytes(notice))
                    )
                ),
                hashedName,
                hashedVersion,
                typeHash
            );
    }

    function verify(
        string calldata name,
        string calldata version,
        address from,
        address to,
        string calldata notice,
        bytes calldata signature
    ) internal view returns (address) {
        bytes32 hashedName = keccak256(bytes(name));
        bytes32 hashedVersion = keccak256(bytes(version));
        bytes32 typeHash = keccak256(
            "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        );
        bytes32 hash = _hash(hashedName, hashedVersion, typeHash, from, to, notice);
        return ECDSA.recover(hash, signature);
    }

    function _hashTypedDataV4(
        bytes32 structHash,
        bytes32 hashedName,
        bytes32 hashedVersion,
        bytes32 typeHash
    ) internal view returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    _domainSeparatorV4(hashedName, hashedVersion, typeHash),
                    structHash
                )
            );
    }

    function _buildDomainSeparator(
        bytes32 typeHash,
        bytes32 name,
        bytes32 version
    ) internal view returns (bytes32) {
        return keccak256(abi.encode(typeHash, name, version, block.chainid, address(this)));
    }
}
