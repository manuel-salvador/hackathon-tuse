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
    string private _baseURI;

    constructor(string memory baseURI, TuseVault vault) ERC721("TuseNFT", "TUSE") {
        require(vault != address(0), "Vault can't be address 0x0!");
        _baseURI = baseURI;
         _vault = vault;
         _maxTokenId = 49;
    }
    
    function mint(address to) external onlyOwner {
        require(_currentTokenId <= _maxTokenId, "TuseNFT: All tokens have been minted");
        _currentTokenId++;
        _safeMint(to, _currentTokenId);
    }
    
    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseURI = baseURI;
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        string memory idString = tokenId.toString();

        uint256 invested = _vault.getEthInvested(tokenId);

        string memory imageURI;
        if (invested > 0) {
            imageURI = "ipfs://tiene-platita";
        } else {
            imageURI = "ipfs://cara-de-pobre";
        }

        return string(abi.encodePacked(
            baseURI,
            idString,
            ".json"
        ));
    }

}
