import React, { useState } from 'react';

function Home({ web3, account, contract, contractAddress, contractABI }) {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [senderAddr, setSenderAddr] = useState('');

  const handleSendEther = async () => {
    try {
      await contract.methods.sendEther(receiver).send({ from: account, value: web3.utils.toWei(amount, 'ether') });
      alert('Ether sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send Ether');
    }
  };

  const handleClaimEther = async () => {
    try {
      await contract.methods.claimEther(senderAddr).send({ from: account });
      alert('Ether claimed successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to claim Ether');
    }
  };

  const handleClaimBackEther = async () => {
    try {
      await contract.methods.claimBackEther().send({ from: account });
      alert('Ether claimed back successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to claim back Ether');
    }
  };

  return (
    <main>
      <section className="card">
        <h2>Send Ether</h2>
        <input
          type="text"
          placeholder="Receiver address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="action-button" onClick={handleSendEther}>Send Ether</button>
      </section>
      <section className="card">
        <h2>Claim Ether</h2>
        <input
          type="text"
          placeholder="Sender address"
          value={senderAddr}
          onChange={(e) => setSenderAddr(e.target.value)}
        />
        <button className="action-button" onClick={handleClaimEther}>Claim Ether</button>
      </section>
      <section className="card">
        <h2>Claim Back Ether</h2>
        <button className="action-button" onClick={handleClaimBackEther}>Claim Back Ether</button>
      </section>
    </main>
  );
}

export default Home;
