// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract InvestiDAOVault is Ownable, Pausable {
    IERC20 public token;

    constructor(IERC20 _token) {
        token = _token;
    }

    function deposit(uint256 amount) external onlyOwner whenNotPaused {
        require(amount > 0, "InvestiDAOVault: Deposit amount must be greater than 0");
        require(token.balanceOf(msg.sender) >= amount, "InvestiDAOVault: Insufficient balance");

        token.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) external onlyOwner whenNotPaused {
        require(amount > 0, "InvestiDAOVault: Withdraw amount must be greater than 0");
        require(token.balanceOf(address(this)) >= amount, "InvestiDAOVault: Insufficient balance");

        token.transfer(msg.sender, amount);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}