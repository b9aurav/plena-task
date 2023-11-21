const { MetaMaskSDK } = require('@metamask/sdk');
const env = require('dotenv').config().parsed;
const { Web3 } = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://api.avax-test.network/ext/bc/C/rpc'));
const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider();

const amount = 1000;
const tokenAddress = '0xfb6115445Bff7b52FeB98650C87f44907E58f802';
const contractAddress = ''; // Enter Contract Address
const contractABI = []; // Enter the ABI of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);
const erc20ABI = []; // Enter the ABI of the ERC20 token

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    return accounts[0];
}

async function depositTokens() {
    const account = await getAccount();
    const referralCode = '0';
    const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
    const tokenContract = new web3.eth.Contract(erc20ABI, tokenAddress);
    await tokenContract.methods.approve(lpAddress, amountInWei).send({ from: account });
    await contract.methods.deposit(tokenAddress, amountInWei, account, referralCode).send({ from: account });
    console.log('Tokens deposited successfully');
}

metamask.connect();
depositTokens();