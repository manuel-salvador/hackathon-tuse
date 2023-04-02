module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // this contract is upgradeable through uups (EIP-1822)
  await deploy('TuseDAO', {
    from: deployer,
    log: true,
    args: [],
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


module.exports.tags = ['protocol_parameters'];
