var MonedaRv = artifacts.require("./MonedaRv.sol");

contract("MonedaRv", function(accounts) {
	it('sets the total supply upon deployment', function() {
		return MonedaRv.deployed().then(function(instance){
			tokenInstance =instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1000000');	
		})
		;
	});
});