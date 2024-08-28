import React, { useState } from 'react';
import Web3 from 'web3';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EtherClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EtherClaimedBack",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EtherSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "claimBackEther",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "senderAddr", "type": "address" }],
      "name": "claimEther",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "senderAddr", "type": "address" }],
      "name": "getEtherTransfer",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "uint256", "name": "", "type": "uint256" },
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address payable", "name": "receiver", "type": "address" }],
      "name": "sendEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];

  const contractAddress = '0x3fba18D8F201B57F72A979bE5CBe17E81CE08F01';
  const sepoliaChainId = '0x8274F'; // 534351 in hexadecimal

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        await checkNetwork(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
        setContract(contractInstance);
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User denied account access or error occurred', error);
      }
    } else {
      console.error('No Ethereum provider detected');
    }
  };

  const checkNetwork = async (web3Instance) => {
    const chainId = await web3Instance.eth.getChainId();
    if (chainId !== parseInt(sepoliaChainId, 16)) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: sepoliaChainId }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: sepoliaChainId,
                chainName: 'Scroll Sepolia Testnet',
                rpcUrls: ['https://sepolia-rpc.scroll.io'],
                blockExplorerUrls: ['https://sepolia.scrollscan.com'],
                nativeCurrency: {
                  name: 'Scroll Sepolia ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
              }],
            });
          } catch (addError) {
            console.error('Failed to add network', addError);
          }
        } else {
          console.error('Failed to switch to the network', switchError);
        }
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="logo" />
            <h1>Insurance Transfer DApp</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          {account ? (
            <p>Connected account: {account}</p>
          ) : (
            <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
          )}
        </header>
        <Routes>
          <Route exact path="/" element={
            <Home 
              web3={web3} 
              account={account} 
              contract={contract} 
              contractAddress={contractAddress} 
              contractABI={contractABI} 
            />} 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
