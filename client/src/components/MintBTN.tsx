import { usePrepareContractWrite, useAccount, useContractWrite } from "wagmi";
export const MintNFT = () => {
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: "0x9d4c4a7f4c0d8e7b4a4b0e6b5d7b9f9c8b1d2c1d",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "mintNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "mintNFT",
    args: [address],
  });
  const { write: send, status } = useContractWrite(config);
  return (
    <button
      disabled={status === "success"}
      onClick={() => send?.()}
      className=""
    >
      Mint NFT
    </button>
  );
};
