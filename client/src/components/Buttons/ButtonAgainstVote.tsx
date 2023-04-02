import { ethers } from "ethers";
import React from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

type Props = {};

export default function ButtonAgainstVote({}: Props) {
  const { address } = useAccount() || {};

  const { config } = usePrepareContractWrite({
    address: "0xbb5c2F2f7F1049fd58c43de6E4002CD310aaF12A",
    overrides: {
      from: address,
      gasLimit: ethers.BigNumber.from("1000000"),
    },

    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
        ],
        name: "voteAgainstProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "voteAgainstProposal",
    args: [ethers.BigNumber.from("1"), [ethers.BigNumber.from("1")]],
  });
  const { write: send, status, isLoading } = useContractWrite(config);
  return (
    <button
      className="px-4 py-2 w-32 bg-red-600 rounded"
      disabled={isLoading}
      onClick={() => send?.()}
    >
      En contra
    </button>
  );
}
