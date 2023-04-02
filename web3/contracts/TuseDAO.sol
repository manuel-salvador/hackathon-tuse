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
        uint256 endTime;
    }

    Proposal[] public proposals;

    IERC721 public tuseNFT;

    uint256 public votingDuration;

    mapping (uint256 => mapping (uint256 => bool)) public _hasVoted;

    constructor(address _tuseNFT, uint256 _votingDuration) {
        tuseNFT = IERC721(_tuseNFT);
        votingDuration = _votingDuration;
    }

    function createProposal(string memory _proposalType, string memory _description) external {
        uint256 proposalId = proposals.length;
        uint256 endTime = block.timestamp + votingDuration;
        proposals.push(Proposal(proposalId, msg.sender, _proposalType, _description, 0, 0, false, endTime));
    }

    function vote(
        uint256 _proposalId, 
        uint256[] memory tokenIds
    ) external {
        require(_proposalId < proposals.length, "Invalid proposal ID");
        require(tokenIds.length > 0, "No TuseNFTs to vote with");

        uint256 votes = tokenIds.length;

        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        require(block.timestamp < proposal.endTime, "Voting has ended");


        for (uint256 n = 0; n < tokenIds.length; n++) {
            require(!_hasVoted[_proposalId][tokenIds[n]], "Already voted!");
            _hasVoted[_proposalId][tokenIds[n]] = true;
        }

        
    
        proposal.votesFor += tokenIds.length;
    }

    function voteAgainstProposal(uint256 _proposalId) external {
        require(_proposalId < proposals.length, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        require(block.timestamp < proposal.endTime, "Voting has ended");

        uint256 votes = tuseNFT.balanceOf(msg.sender);
        require(votes > 0, "No TuseNFTs to vote with");

        proposal.votesAgainst += votes;
    }

    function executeProposal(uint256 _proposalId) external {
        require(_proposalId < proposals.length, "Invalid proposal ID");

        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        require(block.timestamp >= proposal.endTime, "Voting has not ended yet");
        require(proposal.votesFor > proposal.votesAgainst, "Proposal was not approved by majority");

        proposal.executed = true;
        // Ejecutar la propuesta
    }
}
