pragma solidity >=0.4.21 <0.7.0;

contract DataRegistry {

    mapping(bytes32 => string) stringStorage;
    mapping(bytes32 => bool) boolStorage;
    mapping(bytes32 => bytes) bytesStorage;
    mapping(bytes32 => uint256) uint256Storage;
    mapping(bytes32 => uint128) uint128Storage;

    // strings

    function getString(bytes32 _key) external view returns (string memory) {
        return stringStorage[_key];
    }

    function setString(bytes32 _key, string calldata _value) external {
        stringStorage[_key] = _value;
    }

    // bools

    function getBoolean(bytes32 _key) external view returns (bool) {
        return boolStorage[_key];
    }

    function setBool(bytes32 _key, bool _value) external {
        boolStorage[_key] = _value;
    }

    // bytes

    function getBytes(bytes32 _key) external view returns (bytes memory) {
        return bytesStorage[_key];
    }

    function setBytes(bytes32 _key, bytes calldata _value) external {
        bytesStorage[_key] = _value;
    }

    // uint256

    function getUint256(bytes32 _key) external view returns (uint256) {
        return uint256Storage[_key];
    }

    function setUint256(bytes32 _key, uint256 _value) external {
        uint256Storage[_key] = _value;
    }

    // uint256

    function getUint128(bytes32 _key) external view returns (uint128) {
        return uint128Storage[_key];
    }

    function setUint128(bytes32 _key, uint128 _value) external {
        uint128Storage[_key] = _value;
    }

}
