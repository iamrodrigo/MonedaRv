App = {
	webProvider: null,
	contracts: {},
	account: '0x0',

	init: function() {
		App.initWeb3();
	},
	initWeb3: function() {
		App.web3Provider = typeof web3 !== 'undefined' ?
		   	web3.currentProvider :
			Web3.providers.HttpProvider("http://localhost:7545");
		
		web3 = new Web3(App.web3Provider);
		App.initContracts();
	},

	initContracts: function() {
		$.getJSON("MonedaRvSale.json", function(monedaRvSale) {
			App.contracts.MonedaRvSale = TruffleContract(monedaRvSale);
			App.contracts.MonedaRvSale.setProvider(App.web3Provider);
			App.contracts.MonedaRvSale.deployed().then(function(monedaRvSale) {
				console.log(monedaRvSale.address);
			})
		})
		.done(function() {
			$.getJSON("MonedaRv.json", function(monedaRv) {
				App.contracts.MonedaRv = TruffleContract(monedaRv);
				App.contracts.MonedaRv.setProvider(App.web3Provider);
				App.contracts.MonedaRv.deployed().then(function(monedaRv) {
					console.log(monedaRv.address);
				});
			});

			return App.render();
		});

	},

	render: function() {
		// load account data
		web3.eth.getCoinbase(function(err, account) {
			if(err === null) {
				App.account = account;
				$('#accountAddress').html("Your Account: " + account);
			}
		})
	}
}

$(function() {
	$(window).load(function() {
		App.init();
	})
})