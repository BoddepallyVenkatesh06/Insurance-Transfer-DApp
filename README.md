# Insurance Transfer DApp

![logo](https://cdn-images.imagevenue.com/42/9d/cd/ME18ZUNZ_o.png)

`Author: Harsh Agrawal & Venky Kumar`


## Description

The Insurance Transfer DApp facilitates secure and authenticated transfers of Ether between parties. It integrates additional authentication measures to prevent the loss of funds due to mistyped wallet addresses.

## Features

- Secure transfer of Ether with claim and claimBack functionalities.
- Handles multiple transactions simultaneously.
- Stores transaction details securely to ensure transparency and verifiability.


## Smart Contract Deployment

- The smart contract is deployed on the Scroll Sepolia Testnet network.
- Contract address: [0x3fba18D8F201B57F72A979bE5CBe17E81CE08F01](https://sepolia.scrollscan.com/address/0x3fba18D8F201B57F72A979bE5CBe17E81CE08F01#code)


## Live Demo

- Test the Application at: [Live Demo](https://insurancetransfer-dapp.netlify.app/)

## Technologies and Tools Used

- **The Graph**: Subgraph indexing for querying blockchain data.
- **Remix IDE:** Used for developing and deploying the smart contract.
- **OpenZeppelin:** Utilized for securing the smart contract with standard libraries.
- **React:** A JavaScript library for building user interfaces.
- **JavaScript:** The primary programming language for front-end development.
- **thirdweb SDK:** Simplifies wallet connection and contract interaction.
- **ethers.js:** A library for interacting with the Ethereum blockchain.
- **walletconnect:** Enables connecting mobile wallets to the DApp.
- **Next.js:** A React framework for server-side rendering and generating static websites.

## How to Use

1. **Send Ether**: Use the form to send Ether to another address.
2. **Claim Ether**: The designated receiver can claim the Ether by providing the sender's address.
3. **Claim Back Ether**: The sender can reclaim the Ether if it hasn't been claimed by the receiver.


## Security Measures

- Utilizes OpenZeppelin's ReentrancyGuard to protect against reentrancy attacks.
- Implements comprehensive modifiers to ensure that only the designated sender or receiver can claim or reclaim the transfers.
- Ensures that each transfer must be claimed or reclaimed before a new transfer can be initiated by the same sender.

## TheGraph 
![image](https://cdn-images.imagevenue.com/32/a2/14/ME18ZUOB_o.png)

The Graph is a decentralized protocol for indexing and querying blockchain data. It allows developers to build and publish open APIs, called subgraphs, that applications can query using GraphQL. 

In this project, The Graph is used to index and query events from the Insurance Transfer smart contract on the Scroll Sepolia Testnet. This enables efficient querying of transaction data, such as sent Ether, claimed Ether, and claimed back Ether events.

### Subgraph Details

- **Subgraph Name**: Insurance Transfer Subgraph
- **Network**: Scroll Sepolia Testnet
- **Entities**: 
  - `EtherClaimed`
  - `EtherClaimedBack`
  - `EtherSent`

### Querying the Subgraph

You can query the subgraph using the Graph Explorer at [The Graph](https://thegraph.com/). Here is an example query:

```graphql
{
  etherClaimeds(first: 5) {
    id
    sender
    receiver
    amount
  }
  etherClaimedBacks(first: 5) {
    id
    sender
    amount
    blockNumber
  }
}
```
## Contact

- **Author**: Harsh Agrawal & Venky Kumar

- **`GitHub`**: [harshagrawal2503](https://github.com/harshagrawal2503)
- **`GitHub`**: [BoddepallyVenkatesh06](https://github.com/BoddepallyVenkatesh06)

For any inquiries or support, please contact me through GitHub

![image](https://cdn-images.imagevenue.com/3d/f9/14/ME18ZUOC_o.png)
