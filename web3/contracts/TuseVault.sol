// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Vault {
    uint256 constant MIN_INVESTMENT = 0.01 ether;
    
    mapping(address => uint256) public balances;
    
    function deposit() public payable {
        require(msg.value >= MIN_INVESTMENT, "Minimum investment amount not met.");
        balances[msg.sender] += msg.value;
    }
    
    function withdraw() public {
        uint256 balance = balances[msg.sender];
        require(balance > 0, "No balance to withdraw.");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }
}
