var MonedaRv = artifacts.require("./MonedaRv.sol");
var MonedaRvSale = artifacts.require("./MonedaRvSale.sol");

module.exports = function(deployer) {
  deployer.deploy(MonedaRv, 1000000).then(function() {
  	return deployer.deploy(MonedaRvSale, MonedaRv.address, 1000000000000000);
  });
};
