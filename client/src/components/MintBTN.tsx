import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePrepareContractWrite, useAccount, useContractWrite } from "wagmi";
export const MintNFT = () => {
  const { isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: "0x9d4c4a7f4c0d8e7b4a4b0e6b5d7b9f9c8b1d2c1d",
    abi: [
      {
        inputs: [{}],
        name: "mintNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "mintNFT",
    args: [],
  });
  const { write: send, status, isLoading } = useContractWrite(config);
  return (
    <div className="flex ">
      {isConnected ? (
        <button
          disabled={status === "success" || isLoading}
          onClick={() => send?.()}
          className=" bg-slate-800 rounded-3xl hover:bg-white text-decorative-500 hover:text-slate-800 font-bold py-2 px-4 border border-decorative-500 hover:border-transparent "
        >
          Mint NFT
        </button>
      ) : (
        <ConnectButton label="Connect your wallet and mint" />
      )}
    </div>
  );
};
