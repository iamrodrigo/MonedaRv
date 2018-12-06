pragma solidity ^0.4.2;

contract MonedaRv {

	string public name = 'MonedaRv';
	string public symbol = 'RV';
	string public standard = 'RV Token 1.0';
	uint256 public totalSupply;

	mapping(address => uint256) public balanceOf;

	constructor (uint256 _initialSupply) public {
		//  Setting the initial supply to the person who deployed the contract
		balanceOf[msg.sender] = _initialSupply;

		totalSupply = _initialSupply;
	}	
}