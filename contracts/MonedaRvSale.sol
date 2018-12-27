pragma solidity ^0.4.2;

import "./MonedaRv.sol";

contract MonedaRvSale {

	address admin;
	MonedaRv public tokenContract;
	uint256 public tokenPrice;

	constructor (MonedaRv _tokenContract, uint256 _tokenPrice) public {
		admin = msg.sender;
		tokenContract = _tokenContract;
		tokenPrice = _tokenPrice;
	}
}