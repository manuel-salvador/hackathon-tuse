// deploy.js

const { ethers } = require("hardhat");

async function main() {
  const tuseNFT = await ethers.getContractAt("TuseNFT", "0x6016f36eC97d3230Fd7abaa7899053362458F0A6");

  const ownerOf1 = await tuseNFT.ownerOf(2);
  console.log('ownerOf', ownerOf1)
  
  const tokenURI = await tuseNFT.tokenURI(2);
  console.log('tokenURI', tokenURI)


  const tusevault = await ethers.getContractAt('TuseVault', "0x1F63F399Ed8d54c4DCf989BE9F0362777f1c4861")

  const ethInvested = await tusevault.getEthInvested(1);
  console.log('ethInvested', ethInvested)

  
}
main();