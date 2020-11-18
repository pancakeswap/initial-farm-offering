pragma solidity 0.6.12;

import "@pancakeswap/pancake-swap-lib/contracts/proxy/TransparentUpgradeableProxy.sol";

contract UpgradeProxy is TransparentUpgradeableProxy {

    constructor(address logic, address admin, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}