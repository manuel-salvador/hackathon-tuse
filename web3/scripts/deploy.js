// deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Deploy TuseVault and set TuseDAO address
  const tuseVaultFactory = await ethers.getContractFactory("TuseVault");
  const tuseVault = await tuseVaultFactory.deploy();
  await tuseVault.deployed();
  console.log("TuseVault deployed to:", tuseVault.address);

  // Deploy TuseNFT and set TuseVault address
  const tuseNFTFactory = await ethers.getContractFactory("TuseNFT");
  const tuseNFT = await tuseNFTFactory.deploy(
    "https://ipfs.io/ipfs/",
    tuseVault.address
  );
  await tuseNFT.deployed();
  console.log("TuseNFT deployed to:", tuseNFT.address);

  // Deploy TuseDAO and set TuseNFT address
  const tuseDAOFactory = await ethers.getContractFactory("TuseDAO");
  const tuseDAO = await tuseDAOFactory.deploy(tuseNFT.address);
  await tuseDAO.deployed();
  console.log("TuseDAO deployed to:", tuseDAO.address);

  // Mint first NFTs
  await tuseNFT.mint(tuse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
