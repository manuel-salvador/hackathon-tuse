module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const parseAmount = (amount) => ethers.utils.parseEther(amount);

  // this contract is upgradeable through uups (EIP-1822)
  await deploy('ProtocolParameters', {
    from: deployer,
    log: true,
    args: [],
    proxy: {
      proxyContract: 'UUPSProxy',
      execute: {
        init: {
          methodName: 'initialize',
          args: [1000000, 1000, deployer],
        },
      },
    },
  });

};


module.exports.tags = ['protocol_parameters'];
