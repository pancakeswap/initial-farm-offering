const IFO = artifacts.require("IFO");

module.exports = async (deployer) => {
  // const num = 50 * Math.pow(10, 18);
  // const numAsHex = "0x" + num.toString(16);

  const lpToken = '0x2b8ff854c5e16cf35b9a792390cc3a2a60ec9ba2';
  const offeringToken = '0x9d54bfef65daed5cc209b39d65d1475212cd9ccf';
  const startBlock = '3576000';
  const endBlock = '3606000';
  const offeringAmount = '100';
  const raisingAmount = '100000';
  const adminAddress = '0x0F9399FC81DaC77908A2Dde54Bb87Ee2D17a3373';
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
