# [POC] EthersJS Connection to Ethereum (Rinkeby)

## Setup NodeJS
1. Initialize NodeJS.
```bash
npm init
```
2. Install NodeJS dependencies.
	- ethers: Used to connect to the blockchain.
	- dotenv: Used to get variables from ".env" files.
```bash
npm install ethers dotenv
```

## Create connection to Ethereum blockchain
1. Create a '.env' file to store INFURA_ID
```bash
touch .env
```
- Input INFURA_ID. (I'm using my personal 'Rinkeby' node I've created).
```bash
INFURA_ID='b6e6453ddb70482fa929f285c9202893'
```
2. Create a new Javascript file called 'etherjs_demo.js'.
- Import dependencies
```javascript
require('dotenv').config();
const { ethers } = require("ethers");
```
- Create connection to Ethereum node.
```javascript
const INFURA_ID = process.env.INFURA_ID
const eth_provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
```
- Instantiate a wallet address.
```javascript
const my_address = '0xe33Cf08406FDB46EaEAA9cC702FDAd54a076C709';
```
- Create an async function that will get the balance of address' ETH.
```javascript
const balance_fn  = async() => {
    const balance = await eth_provider.getBalance(my_address);
    console.log(`ETH balance of ${my_address}: ${ethers.utils.formatEther(balance)} ETH`);
}
balance_fn();
```
3. Test the code snippet by running the following command.
```javascript
node etherjs_demo.js
```
- The Result should look like this.
```bash
ETH balance of 0xe33Cf08406FDB46EaEAA9cC702FDAd54a076C709: 0.0 ETH
```