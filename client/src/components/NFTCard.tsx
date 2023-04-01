import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Image from "next/image";

import { MintNFT } from "./MintBTN";

export const NFTCard = () => {
  const [nftData, setNftData] = useState();
  const [loading, setLoading] = useState(false);
  const settings = {
    apiKey: "3i8jCezRXagBt41owabyHL1nxambxJHr",
    network: Network.ETH_GOERLI,
  };

  const alchemy = new Alchemy(settings);

  async function getNftMetadata() {
    let res = await alchemy.nft
      .getNftMetadata("0x7c80d72c20fae78000c1c27db9ba37f46b8434cb", 39)
      .then((response) => {
        setNftData(response);
        setLoading(true);
      });
  }
  console.log(nftData?.rawMetadata?.image, "nftData");
  useEffect(() => {
    getNftMetadata();
  }, []);

  return (
    <div className="w-full justify-center items-center flex ">
      {loading ? (
        <div className="flex flex-col w-6/12 justify-center items-center rounded-2xl bg-red-300">
          <Image
            src={nftData.rawMetadata.image}
            alt={"NFTIMAGE"}
            width={150}
            height={100}
          />
          <h2>{nftData.rawMetadata.name}</h2>
          <h4>{nftData.rawMetadata.description}</h4>
          <MintNFT />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
