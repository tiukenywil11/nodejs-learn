require('dotenv').config();
const { ethers } = require("ethers");

// Create connection to Ether RPC
const INFURA_ID = process.env.INFURA_ID
const eth_provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const my_address = '0xe33Cf08406FDB46EaEAA9cC702FDAd54a076C709';

const balance_fn  = async() => {
    const balance = await eth_provider.getBalance(my_address);
    console.log(`ETH balance of ${my_address}: ${ethers.utils.formatEther(balance)} ETH`);
}

balance_fn();