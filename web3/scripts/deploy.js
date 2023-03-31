const { ethers } = require("hardhat");

async function main() {
  // Deploy TuseDAO
  const tuseDAOFactory = await ethers.getContractFactory("TuseDAO");
  const tuseDAO = await tuseDAOFactory.deploy();
  await tuseDAO.deployed();
  console.log("TuseDAO deployed to:", tuseDAO.address);

  // Deploy TuseVault and set TuseDAO address
  const tuseVaultFactory = await ethers.getContractFactory("TuseVault");
  const tuseVault = await tuseVaultFactory.deploy(tuseDAO.address);
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

  // Deploy Tuse and set TuseDAO, TuseVault, and TuseNFT addresses
  const tuseFactory = await ethers.getContractFactory("Tuse");
  const tuse = await tuseFactory.deploy(
    tuseDAO.address,
    tuseVault.address,
    tuseNFT.address
  );
  await tuse.deployed();
  console.log("Tuse deployed to:", tuse.address);

  // Mint NFTs
  await tuseNFT.mint(tuse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
