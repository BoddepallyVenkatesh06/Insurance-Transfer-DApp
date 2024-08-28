//     Author: Harsh Agrawal & Venky Kumar 
//
//    The following code aims to solve a specific use case related to the secure transfers
//    between two parties while incorporating additional authentication to prevent losing funds
//    due to mistyped wallet addresses.


pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract InsuranceTransfer is ReentrancyGuard {
    struct Transfer {
        address payable sender;
        address payable receiver;
        uint256 amount;
        bool claimed;
    }

    mapping(address => Transfer) private transfers;

    event EtherSent(address indexed sender, address indexed receiver, uint256 amount);
    event EtherClaimed(address indexed sender, address indexed receiver, uint256 amount);
    event EtherClaimedBack(address indexed sender, uint256 amount);

    modifier onlySender(address senderAddr) {
        require(msg.sender == transfers[senderAddr].sender, "Only sender can call this function");
        _;
    }

    modifier notClaimed(address senderAddr) {
        require(!transfers[senderAddr].claimed, "Transfer has already been claimed");
        _;
    }

    // Ether functions
    function sendEther(address payable receiver) external payable nonReentrant {
        require(msg.value > 0, "Must send a positive amount");
        require(transfers[msg.sender].amount == 0, "Existing transfer must be claimed first");

        transfers[msg.sender] = Transfer({
            sender: payable(msg.sender),
            receiver: receiver,
            amount: msg.value,
            claimed: false
        });

        emit EtherSent(msg.sender, receiver, msg.value);
    }

    function claimEther(address senderAddr) external nonReentrant notClaimed(senderAddr) {
        require(msg.sender == transfers[senderAddr].receiver, "You are not the intended receiver");

        transfers[senderAddr].claimed = true;
        uint256 amount = transfers[senderAddr].amount;

        // Reset the transfer data
        transfers[senderAddr] = Transfer({
            sender: payable(address(0)),
            receiver: payable(address(0)),
            amount: 0,
            claimed: true
        });

        payable(msg.sender).transfer(amount);

        emit EtherClaimed(transfers[senderAddr].sender, msg.sender, amount);
    }

    function claimBackEther() external nonReentrant onlySender(msg.sender) notClaimed(msg.sender) {
        uint256 amount = transfers[msg.sender].amount;

        // Reset the transfer data
        transfers[msg.sender] = Transfer({
            sender: payable(address(0)),
            receiver: payable(address(0)),
            amount: 0,
            claimed: true
        });

        payable(msg.sender).transfer(amount);

        emit EtherClaimedBack(msg.sender, amount);
    }

    // Getter functions
    function getEtherTransfer(address senderAddr) external view returns (address, address, uint256, bool) {
        Transfer memory transfer = transfers[senderAddr];
        return (transfer.sender, transfer.receiver, transfer.amount, transfer.claimed);
    }
}