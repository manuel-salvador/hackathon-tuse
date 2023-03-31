// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract TuseDAO {
    struct Proposal {
        uint256 id;
        address proposer;
        string proposalType;
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
    }

    Proposal[] public proposals;

    IERC721 public tuseNFT;

    constructor(address _tuseNFT) {
        tuseNFT = IERC721(_tuseNFT);
    }

    function createProposal(string memory _proposalType, string memory _description) external {
        uint256 proposalId = proposals.length;
        proposals.push(Proposal(proposalId, msg.sender, _proposalType, _description, 0, 0, false));
    }

    function vote(uint256 _proposalId) external {
        require(_proposalId < proposals.length, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");

        uint256 votes = tuseNFT.balanceOf(msg.sender);
        require(votes > 0, "No TuseNFTs to vote with");

        proposal.votesFor += votes;
    }

    function executeProposal(uint256 _proposalId) external {
        require(_proposalId < proposals.length, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");

        uint256 votes = tuseNFT.balanceOf(msg.sender);
        require(votes > 0, "No TuseNFTs to vote with");

        proposal.votesAgainst += votes;

        if (proposal.votesFor > proposal.votesAgainst) {
            proposal.executed = true;
            // Ejecutar la propuesta
        }
    }
}
