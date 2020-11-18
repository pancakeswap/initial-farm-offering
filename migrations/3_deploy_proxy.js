const IFOByProxy = artifacts.require("IFOByProxy");
const IFOUpgradeProxy = artifacts.require("IFOUpgradeProxy");

const fs = require('fs');
const abi = require('./abi/ifo.json')

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));

module.exports = async function(deployer, a, account) {
    await deployer.deploy(IFOByProxy);

    const proxyAdmin= '0x0F9399FC81DaC77908A2Dde54Bb87Ee2D17a3373';
    const ifoAdmin= '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1';

    const lpToken = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6';
    const offeringToken = '0x009cf7bc57584b7998236eff51b98a168dcea9b0';
    const startBlock = '2401192';
    const endBlock = '2402392';
    const offeringAmount = '100';
    const raisingAmount = '100000';
    const adminAddress = ifoAdmin;

    const abiEncodeData = web3.eth.abi.encodeFunctionCall({
      "inputs": [
        {
          "internalType": "contract IBEP20",
          "name": "_lpToken",
          "type": "address"
        },
        {
          "internalType": "contract IBEP20",
          "name": "_offeringToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_offeringAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_raisingAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_adminAddress",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, [
      lpToken,
      offeringToken,
      startBlock,
      endBlock,
      offeringAmount,
      raisingAmount,
      adminAddress
    ]);

    await deployer.deploy(IFOUpgradeProxy, IFOByProxy.address, proxyAdmin, abiEncodeData);

    console.log(IFOByProxy.address, proxyAdmin, abiEncodeData);

    // const lotteryProxy = new web3.eth.Contract(abi, IFOUpgradeProxy.address);
    // console.log((await lotteryProxy.methods.getAddressListLength().call()).toString())

};



