import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePrepareContractWrite, useAccount, useContractWrite } from 'wagmi';
import { ethers } from 'ethers';

import abi from '../utils/TuseDAO.json';
export const MintNFT = () => {
  const { address, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: '0x6016f36eC97d3230Fd7abaa7899053362458F0A6',
    overrides: {
      value: ethers.utils.parseEther('0.01'),
      from: address,
      gasLimit: ethers.BigNumber.from('1000000'),
    },
    abi: [
      {
        inputs: [],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'mint',
  });
  const { write: send, status, isLoading } = useContractWrite(config);
  return (
    <div className="flex ">
      {isConnected ? (
        <button
          disabled={status === 'success' || isLoading}
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
