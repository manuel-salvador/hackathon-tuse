// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TuseVault {
    uint256 constant MIN_INVESTMENT = 0.01 ether;
    address public constant CARTESI_ADDRESS = 0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0; // Dirección de Cartesi
    
    mapping(uint256 => uint256) public balances;

    modifier onlyCartesi() {
        require(msg.sender == CARTESI_ADDRESS, "Caller is not Cartesi");
        _;
    }
    
    function deposit(uint256 tokenId) public payable {
        require(msg.value >= MIN_INVESTMENT, "Minimum investment amount not met.");
        balances[tokenId] += msg.value;
    }
    
    function withdraw(uint256 tokenId) public {
        uint256 balance = balances[tokenId];
        // require ownerOf(tokenId) <-- Agregar, falla de seguridad fuerte aca
        require(balance > 0, "No balance to withdraw.");
        balances[tokenId] = 0;
        payable(msg.sender).transfer(balance);
    }
    
    function updateBalance() public onlyCartesi {
        // Código para actualizar el balance
    }

       function getEthInvested(uint256 tokenId) public view returns (uint256) {
        return balances[tokenId];
    }
}
