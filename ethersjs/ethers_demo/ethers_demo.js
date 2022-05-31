require('dotenv').config();
const { ethers } = require("ethers");

// Create connection to Ether RPC
const INFURA_ID = process.env.INFURA_ID
const eth_provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const my_address = '0xe33Cf08406FDB46EaEAA9cC702FDAd54a076C709';
const my_address_2 = '0xc93F3e583eAbB1f922adFCC340C7343F2871218a';

const my_private_key = '20af36d61ebf83bd630f9e8bfe1389a724b1f412d41f22fde01001e822ac00a3';

let eth_wallet = new ethers.Wallet(my_private_key);
let eth_wallet_signer = eth_wallet.connect(eth_provider)

// Get ETH balance of wallet address
const balance_fn  = async() => {
    const balance = await eth_provider.getBalance(my_address);
    console.log(`ETH balance of ${my_address}: ${ethers.utils.formatEther(balance)} ETH`);
}

balance_fn();

// Read smart contracts

const kenny_token_address = '0x481e9d6a5798430a953e49432e5651f6bea790c5';
// Array of smart contract funtions
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]
const kenny_read_contract = new ethers.Contract(kenny_token_address, ERC20_ABI, eth_provider);
const kenny_write_contract = new ethers.Contract(kenny_token_address, ERC20_ABI, eth_wallet_signer);

const get_erc20 = async() => {
    const name = await kenny_read_contract.name();
    const symbol = await kenny_read_contract.symbol();
    const balance = await kenny_read_contract.balanceOf(my_address);
    const balance_2 = await kenny_read_contract.balanceOf(my_address_2);

    console.log(`${name} (${symbol}) balance of ${my_address}: ${balance} ${symbol}`);
    console.log(`${name} (${symbol}) balance of ${my_address_2}: ${balance_2} ${symbol}`);

}

const send_erc20 = async() => {
    
    await get_erc20();

    // transfer 0 kenny tokens to 'my_address_2'
    const contract_data = await kenny_write_contract.transfer(my_address_2, ethers.utils.parseUnits('1', 18));

    await contract_data.wait();

    await get_erc20();
}

send_erc20();
