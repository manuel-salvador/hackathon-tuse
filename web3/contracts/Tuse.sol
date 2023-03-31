// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TuseDAO.sol";
import "./TuseVault.sol";
import "./TuseNFT.sol";

contract Tuse {
    TuseDAO public tuseDAO;
    TuseVault public tuseVault;
    TuseNFT public tuseNFT;
    address public admin;

    constructor(address _tuseDAO, address _tuseVault, address _tuseNFT, address _admin) {
        tuseDAO = TuseDAO(_tuseDAO);
        tuseVault = TuseVault(_tuseVault);
        tuseNFT = TuseNFT(_tuseNFT);
        admin = _admin;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    function setDAOProposals(uint256 proposalId, uint256 votes) public onlyAdmin {
        tuseDAO.setProposalVotes(proposalId, votes);
    }

    function setNFTBaseURI(string memory baseURI) public onlyAdmin {
        tuseNFT.setBaseURI(baseURI);
    }

    function getVaultEthInvested(uint256 tokenId) public view returns (uint256) {
        return tuseVault.getEthInvested(tokenId);
    }

    function depositToVault() public payable {
        tuseVault.deposit{value: msg.value}();
    }

    function withdrawFromVault() public {
        tuseVault.withdraw();
    }
}
