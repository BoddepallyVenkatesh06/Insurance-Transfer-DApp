import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>About Insurance Transfer DApp</h2>
      <p>
        This Decentralized Application (DApp) allows users to securely transfer Ether (ETH) between two parties, with additional authentication to prevent losing funds due to mistyped wallet addresses. The main functionalities include:
      </p>
      <ul>
        <li><strong>Send Ether:</strong> Users can send Ether to a specified receiver address.</li>
        <li><strong>Claim Ether:</strong> Receivers can claim the Ether sent to them by providing the sender's address.</li>
        <li><strong>Claim Back Ether:</strong> Senders can claim back their Ether if the receiver has not claimed it yet.</li>
      </ul>
      <p>
        The smart contract behind this dApp is designed to handle multiple transactions simultaneously. It securely stores the information for each transaction, including the sender's address, receiver's address, and the amount of Ether transferred. Here are some key features of the smart contract:
      </p>
      <ul>
        <li><strong>Concurrent Transactions:</strong> The contract can manage multiple transactions at the same time, ensuring that each transaction is processed independently and securely.</li>
        <li><strong>Transaction Storage:</strong> The contract maintains a record of all transactions, storing essential details such as the sender's address, receiver's address, and the transaction amount. This information is used to verify and process claims.</li>
        <li><strong>Security:</strong> By incorporating additional authentication steps, the contract helps prevent the loss of funds due to mistyped wallet addresses. Only the intended receiver can claim the sent Ether.</li>
        <li><strong>Transparency:</strong> All transactions are recorded on the blockchain, providing transparency and verifiability. Users can check the status and details of their transactions at any time.</li>
      </ul>
      <p>
        Ensure you are connected to the Scroll Sepolia Testnet network and have the required funds in your wallet to perform these actions. This dApp aims to provide a secure and reliable way to transfer and manage your Ether transactions.
      </p>
      <h3>Author</h3>
      <p>Harsh Agrawal & Venky Kumar</p>
      <h3>Contact</h3>
      <p>GitHub: <a href="https://github.com/harshagrawal2503" target="_blank" rel="noopener noreferrer">https://github.com/harshagrawal2503</a></p>
      <p>GitHub: <a href="https://github.com/BoddepallyVenkatesh06" target="_blank" rel="noopener noreferrer">https://github.com/BoddepallyVenkatesh06</a></p>
      </div>
  );
}

export default About;
