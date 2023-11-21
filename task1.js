const { Web3 } = require('web3');
const env = require('dotenv').config().parsed;
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

const contractAddress = '0xE3A479c9C8352Aff75750944056afa0ecA1840cC';
const tokenAddress = '0xb8c77482e45f1f44de1745f52c74426c631bdd52';
const recipientAddress = '0x7684f5e3Fb574e7287A9124008C8Bd49D36b0A0a';

const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_payload",
        "type": "bytes"
      }
    ],
    "name": "transferFunds",
    "outputs": [],
    "payable": false,  
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contract = new web3.eth.Contract(abi, contractAddress);

const transferFunctionSignature = web3.eth.abi.encodeFunctionSignature('transfer(address,uint256)');
const transferFunctionParameters = web3.eth.abi.encodeParameters(['address', 'uint256'], [recipientAddress, web3.utils.toWei('1', 'ether')]); // Transfer 1 BNB
const payload = transferFunctionSignature + transferFunctionParameters.slice(2);

contract.methods.transferFunds(tokenAddress, payload).send({ from: env.ACCOUNT_ADDRESS });
