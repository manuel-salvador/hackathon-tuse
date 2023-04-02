module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // this contract is upgradeable through uups (EIP-1822)
  await deploy('TuseNFT', {
    from: deployer,
    log: true,
    args: [
      '0x1F63F399Ed8d54c4DCf989BE9F0362777f1c4861'
    ],
    // proxy: {
    //   proxyContract: 'UUPSProxy',
    //   execute: {
    //     init: {
    //       methodName: 'initialize',
    //       args: [1000000, 1000, deployer],
    //     },
    //   },
    // },
  });

};

module.exports.tags = ['TuseNFT'];