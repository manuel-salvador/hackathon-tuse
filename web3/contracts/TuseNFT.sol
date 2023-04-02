// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./TuseVault.sol";

contract TuseNFT is ERC721, Ownable {
    
    using Strings for uint256;
    TuseVault private _vault;

    uint256 private _currentTokenId = 0;
    uint256 private immutable _maxTokenId;
    uint256 private _mintFee = 2;

    constructor(
        TuseVault vault
    ) ERC721("TuseNFT", "TUSE") {
        require(address(vault) != address(0), "Vault can't be address 0x0!");
        _vault = vault;
        _maxTokenId = 4999;
    }
    
    function mint() external payable {
        require(_currentTokenId <= _maxTokenId, "TuseNFT: All tokens have been minted");
        require(msg.value >= 0.01 ether, "TuseNFT: Minimum investment amount not met.");
        _currentTokenId++;
        _safeMint(msg.sender, _currentTokenId);
        uint256 mintFee = (msg.value * _mintFee) / 100;
        _vault.deposit{value: msg.value - mintFee}(_currentTokenId);
    }

    function withdrawMintEarnings() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "TuseNFT: No earnings to withdraw.");
        payable(msg.sender).transfer(balance);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        uint256 invested = _vault.getEthInvested(tokenId);

        string memory imageURI;
        if (invested > 0) {
            imageURI = "https://gateway.pinata.cloud/ipfs/QmPWU6ANZqaP8pcg7YAnpQ5RvfAw1G5rSVhdd4p7RJPGWz";
        } else {
            imageURI = "https://gateway.pinata.cloud/ipfs/QmQryxrkbndLYJVEknfXXyDGyfMQRZRerYDLWn62iTS32N";
        }

        return imageURI;

    }

}
