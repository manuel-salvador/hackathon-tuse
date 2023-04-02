import { Network, Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Image from "next/image";

import HeroImage from "/public/Hero.webp";

import Loading from "@/utils/Loading";

import { MintNFT } from "./MintBTN";

export const NFTCard = () => {
  const [nftData, setNftData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const settings = {
    apiKey: "3i8jCezRXagBt41owabyHL1nxambxJHr",
    network: Network.ETH_GOERLI,
  };

  const alchemy = new Alchemy(settings);

  async function getNftMetadata() {
    let res = await alchemy.nft
      .getNftMetadata("0x6016f36eC97d3230Fd7abaa7899053362458F0A6", 1)
      .then((response) => {
        setNftData(response);
        setLoading(true);
      });
  }
  useEffect(() => {
    getNftMetadata();
  }, []);
  console.log(nftData);
  return (
    <div className="w-full justify-center items-center flex ">
      {loading ? (
        <div className="flex flex-col w-6/12 justify-center items-center rounded-2xl ">
          <Image
            src={HeroImage}
            alt="Hero image"
            fill={true}
            className="object-cover brightness-75 -z-10 rounded-b-[90%] shadow-2xl shadow-gray-900"
            priority
          />
          <Image
            src={nftData?.rawMetadata.image}
            alt={"NFTIMAGE"}
            width={150}
            height={50}
            className="rounded-2xl mt-3"
          />
          <h1 className="mt-3">{nftData?.rawMetadata.name}</h1>
          {/* <h4>{nftData.rawMetadata.description}</h4> */}
          <MintNFT />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
