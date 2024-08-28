import { ethers } from 'ethers';

// ABI of the contract
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

const contractAddress = "0x3fba18D8F201B57F72A979bE5CBe17E81CE08F01";

export const getEtherTransfer = async (provider, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  return await contract.getEtherTransfer(senderAddr);
};

export const sendEther = async (signer, receiver, amount) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.sendEther(receiver, { value: ethers.parseEther(amount) });
  await tx.wait();
};

export const claimEther = async (signer, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimEther(senderAddr);
  await tx.wait();
};

export const claimBackEther = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimBackEther();
  await tx.wait();
};
