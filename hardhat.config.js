require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.MUMBAI_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.MAINNET_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: '0.8.4',
};
