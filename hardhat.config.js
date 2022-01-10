// hardhat.config.js
const infuraProjectId = 
const mnemonic = 
const etherscanApiKey = 

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanApiKey
  },
  solidity: "0.8.7"
};