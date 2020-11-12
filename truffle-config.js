var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   bscTestnet:{
     provider: function() {
       // 0x25449306F743E252720cC03540773423513f5FEf
       return new HDWalletProvider("3a4462606834f2362f7ddbb33100445b9729351dd6935294fa95cdc1cdbf9cf8", "https://data-seed-prebsc-1-s1.binance.org:8545")
     },
     network_id: "97"
   },

   bscMainnet: {
     provider: function() {
       return new HDWalletProvider("", "https://bsc-dataseed.binance.org")
     },
     network_id: "56"
   },

   ropsten:{
     provider: function() {
     },
     network_id: "3"
   },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: ''
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: { optimizer: { enabled: true, runs: 200 }}
    }
  }
};
