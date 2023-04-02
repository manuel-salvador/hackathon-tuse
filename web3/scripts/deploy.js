// deploy.js

const { ethers } = require("hardhat");

async function main() {
  const tuseNFT = await ethers.getContractAt("TuseNFT", "0x6016f36eC97d3230Fd7abaa7899053362458F0A6");

  const ownerOf1 = await tuseNFT.ownerOf(2);
  // const ownerOf2 = await tuseNFT.ownerOf(1);
  // const ownerOf3 = await tuseNFT.ownerOf(2);
  // const ownerOf4 = await tuseNFT.ownerOf(3);
  // const ownerOf5 = await tuseNFT.ownerOf(4);

  console.log('ownerOf', ownerOf1)
  // console.log('ownerOf', ownerOf2)
  // console.log('ownerOf', ownerOf3)
  // console.log('ownerOf', ownerOf4)
  // console.log('ownerOf', ownerOf5)


}
main();