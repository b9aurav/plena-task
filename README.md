## Task 1: 
Transfer the Testnet BNB available in the contract below to your BSC address.

Contract Address:
`0xE3A479c9C8352Aff75750944056afa0ecA1840cC`

Contract Code: 
```
pragma solidity 0.8.0;

contract Test{
  function transferFunds(address _address, bytes calldata _payload) external{
    (bool status,) = _address.delegatecall(_payload);
    require(status, "Forwarded call failed.");
  }
}
```

## Task 2:
Script in JS to execute a transaction using Metamask which interacts with Aave’s smart contract and deposits ERC20 token to the Aave’s smart contract by calling the deposit/supply method. 

## Get Started
1. Clone the repository
```
git clone https://github.com/b9aurav/plena-task.git
cd plena-task
```
2. Install required packages
```
npm install
```
3. Execute task 1
```
node task1.js
```
4. Execute task 2
```
node task2.js
```