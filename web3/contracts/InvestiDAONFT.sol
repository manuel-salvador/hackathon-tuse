pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InvestiDAONFT is ERC721, Ownable {

    uint256 public nextTokenId;
    uint256 public minInvestment;
    address public daoAddress;
    mapping(uint256 => uint256) public investments;

    constructor(string memory _name, string memory _symbol, uint256 _minInvestment, address _daoAddress) ERC721(_name, _symbol) {
        nextTokenId = 1;
        minInvestment = _minInvestment;
        daoAddress = _daoAddress;
    }

    function mint(address to, uint256 value) external onlyOwner returns (uint256) {
        require(value >= minInvestment, "InvestiDAONFT: investment value below minimum");
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _mint(to, tokenId);
        investments[tokenId] = value;
        return tokenId;
    }

    function addInvestment(uint256 tokenId, uint256 value) external onlyOwner {
        require(_exists(tokenId), "InvestiDAONFT: nonexistent token id");
        investments[tokenId] += value;
    }

    function getInvestment(uint256 tokenId) external view returns (uint256) {
        require(_exists(tokenId), "InvestiDAONFT: nonexistent token id");
        return investments[tokenId];
    }

}
