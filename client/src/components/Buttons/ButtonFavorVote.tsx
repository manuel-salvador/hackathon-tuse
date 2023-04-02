import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

type Props = {};

export default function ButtonFavorVote({}: Props) {
  const { address } = useAccount() || {};
  const [nftData, setNftData] = useState<any>();
  const settings = {
    apiKey: "3i8jCezRXagBt41owabyHL1nxambxJHr",
    network: Network.ETH_GOERLI,
  };

  const alchemy = new Alchemy(settings);

  async function getNfts() {
    let res = await alchemy.nft
      .getNftsForOwner(address || "0x00")
      .then((response) => {
        setNftData(response);
      });
  }
  useEffect(() => {
    getNfts();
  }, []);

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
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "vote",
    args: [ethers.BigNumber.from("1"), [ethers.BigNumber.from("1")]],
  });

  const { write: send, status, isLoading } = useContractWrite(config);

  return (
    <button
      className="px-4 py-2 w-32 bg-green-600 rounded"
      disabled={isLoading || status === "success"}
      onClick={() => send?.()}
    >
      A favor
    </button>
  );
}
