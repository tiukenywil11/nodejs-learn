# Introduction
  
Found an interesting YouTube video "4 Fail Safe Strategies For Solidity Smart Contracts" by EatTheBlocks linked [here](https://youtu.be/LZ3XPhV7I1Q). Security measures to safely fail on a smart contract, this is valuable because failing on a smart contract may mean paying a lot of gas fees, which is equivalet to real life money. 

## Fail safe patterns

### 1. Circuit Breakers: Stops an execution prematurely if a condition is met.
1. Here is the full function source code.
```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FakeContract {
	bool private stopped = false;
	address private owner;
	
	modifier isAdmin() {
		require(msg.sender == owner);
		_;
	}
	
	function toggleCotractActive() isAdmin public {
		stopped = !stopped;
	}
	
	modifier stopInEmergency { 
		if(!stopped) 
		_; 
	}
	
	modifier onlyInEmergency { 
		if(stopped) 
		_; 
	}
	
	function deposit() stopInEmergency public {
		// insert code here
	}
	
	function withdraw() onlyInEmergency public {
		// insert code here
	}
	
}
```
2. Line by line explanation.
-  Input the license specifier.
```javascript
// SPDX-License-Identifier: MIT
```
- Import compiler version.
```javascript
pragma solidity ^0.8.0;
```
- Create contract called 'FakeContract'
```javascript
contract FakeContract {

}
```
- Insert boolean variable called stopped: This is used to check if the program needs to stop.
	- bool: boolean type variable.
	- private: Can only be accessed by the smart contract.
	- stopped: Variable name.
	- Default value is false.
```javascript
bool private stopped = false;
```
- Insert address variable called owner: This would contain the address of the wallet that deployed this contract.
	- address: address type variable.
	- private: Can only be accesed by the smart contract.
	- owner: variable name.
```javascript
address private owner;
```
- Create a function modifier called isAdmin: This would be attached to functions to check if the contract owner is the same value as the wallet trying to access it.
	- modifier: Function modifier tag.
	- isAdmin(): Function name.
	- `require(msg.sender == owner)`: msg.sender, the wallet address accessing the contract, must have the same value as owner, the address the created the contract.
	- `_;`: Would be replaced with the codes where isAdmin() function modifier is attached to.
```javascript
	modifier isAdmin() {
		require(msg.sender == owner);
		_;
	}
```
- Create function toggleContractActive: This toggles if the contract is stopped or not.
	- function: Function tag.
	- toggleContract(): Function name.
	- isAdmin: Function modifier that checks if the admin is accessing the contract.
	- public: This function can be accessed externally.
	- `stopped = !stopped;`: If stopped is false, then assign true, vice versa.
```javascript
function toggleCotractActive() isAdmin public {
	stopped = !stopped;
}
```
-  Create a function modifier stop running a function, when stopped variable is false.
	- modifier: Function modifier tag.
	- stopInEmergency: Modfier name.
	- `if(!stopped)`: If variable is false, stop the function.
	- `_;`: Would be replaced with the codes where stopInEmergency() function modifier is attached to.
```javascript
modifier stopInEmergency { 
	if(!stopped) 
	_; 
}
```
-  Create a function modifier run a function in case of emergency, when stopped variable is true.
	- modifier: Function modifier tag.
	- onlyInEmergency: Modfier name.
	- `if(stopped)`: If variable is true, enable the function.
	- `_;`: Would be replaced with the codes where onlyInEmergency() function modifier is attached to.
```javascript
modifier onlyInEmergency { 
	if(stopped) 
	_; 
}
```
- If things went wrong, stop the deposit function from working.
	- function: Function tag.
	- deposit(): Function name.
	- stopInEmergency: Function modifier that stops the deposit of funds in case of an emergency.
	- public: This function can be accessed externally.
```javascript
function deposit() stopInEmergency public {
	// insert code here
}
```
- If a things went wrong, withdraw all the funds from the smart contract.
	- function: Function tag.
	- withdraw(): Function name.
	- onlyInEmergency: Function modifier that enables withdraw of all funds in case on an emergency.
	- public: This function can be accessed externally.
```javascript
function withdraw() onlyInEmergency public {
// insert code here
}
```