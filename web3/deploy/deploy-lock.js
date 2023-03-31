const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const hre = require("hardhat");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  arguments = [hre.ethers.utils.parseEther("0.001")];

  const attacker = await deploy("Lock", {
    from: deployer,
    log: true,
    args: arguments,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("-------------------------------------");

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(attacker.address, arguments);
  }

  log("-------------------------------------");
};

module.exports.tags = ["all", "coinflip"];
