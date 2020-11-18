const IFO = artifacts.require("IFO");

module.exports = async (deployer) => {
  // const num = 50 * Math.pow(10, 18);
  // const numAsHex = "0x" + num.toString(16);

  const lpToken = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6';
  const offeringToken = '0x009cf7bc57584b7998236eff51b98a168dcea9b0';
  const startBlock = '2401192';
  const endBlock = '2402392';
  const offeringAmount = '100';
  const raisingAmount = '100000';
  const adminAddress = '0x35f16A46D3cf19010d28578A8b02DfA3CB4095a1';
  await deployer.deploy(
    IFO,
    lpToken,
    offeringToken,
    startBlock,
    endBlock,
    offeringAmount,
    raisingAmount,
    adminAddress
  );
};
