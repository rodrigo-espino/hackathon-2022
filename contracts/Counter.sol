// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter {
  uint public count;

  constructor() {
    count = 0;
  }

  // rather doing a transaction than a call -- https://github.com/trufflesuite/truffle/issues/3105#issuecomment-644311706
  function get() public view returns (uint) {
    return count;
  }

  function inc() public {
    count += 1;
  }

  function dec() public {
    require(count > 0, "Can not decrement further");
    count -= 1;
  }
}