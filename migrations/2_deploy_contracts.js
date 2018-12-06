var MonedaRv = artifacts.require("./MonedaRv.sol");

module.exports = function(deployer) {
  deployer.deploy(MonedaRv, 1000000);
};
