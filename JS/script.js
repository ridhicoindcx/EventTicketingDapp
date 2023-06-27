// Sample event data
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Replace with your Ethereum node URL

const EventManagercontractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_numTickets",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_seatNumber",
        "type": "uint256[]"
      }
    ],
    "name": "bookSeats",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_eventDescription",
        "type": "string"
      }
    ],
    "name": "createEvent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "events",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "eventName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "maxSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availableSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "eventDescription",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "cancelled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "completed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getAvailableSeats",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getDateTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getEventDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEventList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "eventId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "eventName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "maxSeats",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableSeats",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ticketPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "slot",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "artist",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "eventDescription",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "cancelled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "completed",
            "type": "bool"
          },
          {
            "internalType": "bool[]",
            "name": "seatMap",
            "type": "bool[]"
          }
        ],
        "internalType": "struct EventManager.Event[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getTicketPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "markCancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "markCompleted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const EventManagerAddress = '0x123...';

const SystemcontractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Bought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "eventName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxSeats",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ticketPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "artist",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "eventDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "artistAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "payment",
        "type": "uint256"
      }
    ],
    "name": "NewEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Sold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "numTickets",
        "type": "uint256"
      }
    ],
    "name": "TicketPurchased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "numTickets",
        "type": "uint256"
      }
    ],
    "name": "TicketTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_numTickets",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_seatNumber",
        "type": "uint256[]"
      }
    ],
    "name": "bookSeats",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "cancelEvent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "completeEvent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_eventDescription",
        "type": "string"
      }
    ],
    "name": "createEvent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_eventDescription",
        "type": "string"
      }
    ],
    "name": "createEvent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "events",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "eventName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "maxSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availableSeats",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slot",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "artist",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "eventDescription",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "cancelled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "completed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "eventsMetadata",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "artistAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "bookingPayment",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "collectedAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getAvailableSeats",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getDateTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getEventDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEventList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "eventId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "eventName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "maxSeats",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableSeats",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ticketPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "slot",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "artist",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "eventDescription",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "cancelled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "completed",
            "type": "bool"
          },
          {
            "internalType": "bool[]",
            "name": "seatMap",
            "type": "bool[]"
          }
        ],
        "internalType": "struct EventManager.Event[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "getTicketPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "markCancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      }
    ],
    "name": "markCompleted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_numTickets",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "_seatNumber",
        "type": "uint256[]"
      }
    ],
    "name": "purchaseTickets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "sellToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "system",
    "outputs": [
      {
        "internalType": "contract Ticket",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract TicketToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eventId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_numTickets",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_askedPrice",
        "type": "uint256"
      }
    ],
    "name": "transferTickets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const SystemAddress = '0x456...';

const TicketABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "eventId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "seatNumber",
        "type": "uint256"
      }
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];
const TicketAddress = '0x234...';

const TicketTokenABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];
const TicketTokenAddress = '0x234...';

const TokenManagerABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Bought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Sold",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "sellToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract TicketToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const TokenManagerAddress = '0x234...';

const EventManager = new ethers.Contract(EventManagerAddress, contract1ABI, provider);
const System = new ethers.Contract(SystemAddress, contract2ABI, provider);
const Ticket = new ethers.Contract(TicketAddress, contract2ABI, provider);
const TicketToken = new ethers.Contract(TicketTokenAddress, contract2ABI, provider);
const TokenManager = new ethers.Contract(TokenManagerAddress, contract2ABI, provider);


function getEvents() {
  // Mocking the list of events
  events = [
    { id: 1, name: 'Event 1', date: '2023-06-25' },
    { id: 2, name: 'Event 2', date: '2023-06-26' },
    { id: 3, name: 'Event 3', date: '2023-06-27' },
    {id:4, name:'Movie: abcd2sasasa', date: '2023-06-30', random:'somerandomdata'}
  ];

  return events;
}

// List of allowed users with roles
const allowedUsers = [
  { email: 'user1@example.com', name: 'User 1', walletId: 'WALLET001', role: 'admin' },
  { email: 'user2@example.com', name: 'User 2', walletId: 'WALLET002', role: 'artist' },
  { email: 'user3@example.com', name: 'User 3', walletId: 'WALLET003', role: 'enthusiast' }
];

// Function to validate email and fetch user details
function validateEmail(email) {
  const user = allowedUsers.find(user => user.email === email);
  return user ? user : null;
}

// Function to generate event cards
function generateEventCards() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';

  // global events ;
  const events = getEvents(); // Retrieve the list of events
  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.dataset.eventId = event.id;

    const name = document.createElement('h3');
    name.innerText = event.name;
    card.appendChild(name);

    const date = document.createElement('p');
    date.innerText = event.date;
    card.appendChild(date);

    eventList.appendChild(card);
  });

  // Add event listener to the event list container
  eventList.addEventListener('click', handleEventClick);
}

// Event listener for event card click
function handleEventClick(event) {
  const selectedEventCard = event.target.closest('.event-card');
  if (selectedEventCard) {
    const eventId = selectedEventCard.dataset.eventId;
    openBookingScreen(eventId);
  }
}

// Function to open the booking screen
function openBookingScreen(eventId) {
  const event = getEvents().find(event => event.id === Number(eventId));
  
  document.getElementById('event-name').innerText = event.name;
  document.getElementById('event-date').innerText = event.date;

  // Get email from login form and pre-fill in booking form
  const email = document.getElementById('email').value;
  document.getElementById('booking-email').value = email;

  // Hide home screen and show booking screen
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('booking-screen').style.display = 'block';
}

// Function to handle booking tickets
function bookTicket(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('booking-email').value;

  // Perform validation here

  // Process booking logic here

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('booking-email').value = '';

  // Show confirmation message
  showConfirmationMessage('success', 'Booking successful!');
}

// Function to display the confirmation message
function showConfirmationMessage(type, message) {
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.innerText = message;
  confirmationMessage.className = type;

  // Hide booking screen and show confirmation screen
  document.getElementById('booking-screen').style.display = 'none';
  document.getElementById('confirmation-screen').style.display = 'block';

  setTimeout(() => {
    // Hide confirmation screen and show home screen after 3 seconds
    document.getElementById('confirmation-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
  }, 3000);
}

// Function to load the appropriate screen based on user role
// function loadScreen(user) {
//   if (user.role === 'enthusiast') {
//     // Show home screen with upcoming events
//     document.getElementById('home-screen').style.display = 'block';
//     document.getElementById('login-screen').style.display = 'none'; // Hide login screen
//   } else {
//     // Show role-specific message
//     const greeting = document.getElementById('greeting');
//     greeting.style.display = 'block';
//     document.getElementById('salutation').innerText = `Hey, you are a ${user.role}!`;
//   }
// }
function loadScreen(user) {
  if (user.role === 'enthusiast') {
    // Show enthusiast screen
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('login-screen').style.display = 'none'; // Hide login screen
  } else if (user.role === 'artist') {
    // Show artist screen
    document.getElementById('home-artist-screen').style.display = 'block';
    document.getElementById('login-screen').style.display = 'none'; // Hide login screen
    document.getElementById('artist-salutation').innerText = `Hey Artist, Mr/s. ${user.name}!`; // Display unique message
    createEventCards();
  } if (user.role === 'admin') {
    // Show artist screen
    document.getElementById('admin-screen').style.display = 'block';
    document.getElementById('login-screen').style.display = 'none'; // Hide login screen
    document.getElementById('admin-salutation').innerText = `Hey Admin, Mr/s. ${user.name}!`; // Display unique message
  }else {
    // Show role-specific message on the login screen
    const greeting = document.getElementById('greeting');
    greeting.style.display = 'block';
    document.getElementById('salutation').innerText = `Hey, you are an ${user.role}!`;
  }
}

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Validate email and fetch user details
  const user = validateEmail(email);

  if (user) {
    const { name, walletId } = user;

    // Set name in booking form
    document.getElementById('name').value = name;
    document.getElementById('wallet-id').value = walletId;

    // Hide login screen and load appropriate screen based on user role
    loadScreen(user);
  } else {
    // Show error message for invalid email
    alert('Invalid email. Please enter a valid email address.');
  }
});

// Event listener for booking form submission
document.getElementById('booking-form').addEventListener('submit', bookTicket);

// Logout functionality
const logoutButtons = document.querySelectorAll('.screen:not(#login-screen) #logout-btn');
logoutButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Redirect to the login screen
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('booking-screen').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';
    document.getElementById('greeting').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
  });
});

function myEvents(){
  const eventData = [
    {
      name: "Event 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Event 2",
      description: "Snished do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Event 3",
      description: "incididunt ut labore et dolore magna aliqua."
    }]
  return eventData;
}

function eventSummary(eventId){
  const detailsData = [
    { key: 'abc:', value: 'detail1' },
    { key: 'xyz:', value: 'detail2' },
    { key: 'pqrs:', value: 'detail3' }
    ];
  console.log("Fetched details for eventId"+ eventId);
  return detailsData;
}
// Function to dynamically fill event cards with data
function createEventCards() {
  const eventCardsContainer = document.getElementById('event-cards-container');
  const eventData=myEvents();
  eventData.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    const event_header = document.createElement('div');

    event_header.addEventListener('click', function(){ toggleVisibility(card)});

    const eventName = document.createElement('h3');
    eventName.className = 'event-name';
    eventName.textContent = event.name;
    event_header.appendChild(eventName);

    const eventDescription = document.createElement('p');
    eventDescription.className = 'event-description';
    eventDescription.textContent = event.description;
    event_header.appendChild(eventDescription);

    const details = document.createElement('div');
    details.className = 'event-details hidden';

    const event_details_header = document.createElement('p');
    event_details_header.className = 'event-details-header';
    event_details_header.textContent = "Details of event ";
    details.appendChild(event_details_header);

    const eventDetails=eventSummary(event.eventId);
    eventDetails.forEach(detail => {
      const row = document.createElement('div');
      row.classList.add('event-detail-row');

       // Create the key element
      const keyElement = document.createElement('span');
      keyElement.classList.add('event-detail-key');
      keyElement.textContent = detail.key;
      row.appendChild(keyElement);

      // Create the value element
      const valueElement = document.createElement('span');
      valueElement.classList.add('event-detail-value');
      valueElement.textContent = detail.value;
      row.appendChild(valueElement);

      // Append the row to the container
      details.appendChild(row);

    });
    event_header.appendChild(details);
    card.appendChild(event_header);
    const newbutton = document.createElement('button');
      newbutton.setAttribute('id','cancel-event-btn');
      newbutton.className = 'hidden';
      newbutton.textContent = "Cancel this event";
      newbutton.addEventListener('click', cancelevent);
    card.appendChild(newbutton);

    
    eventCardsContainer.appendChild(card);
  });
}

function toggleVisibility(element) {
  // Clear the container
  const detailsContainer = element.querySelector('.event-details');
  detailsContainer.classList.toggle('hidden');
  element.querySelector("#cancel-event-btn").classList.toggle('hidden');
}

function cancelevent(){
  console.log("Clicked button")
}
// Generate event cards on page load
generateEventCards();

function show_new_event_form(){
  const newEventForm = document.getElementById('new-event-form');
  newEventForm.style.display = 'block';
}
function close_event_form() {
  document.getElementById('new-event-form').style.display = 'none';
}
function submit_new_event(){
  var form = document.getElementById('event-form');

  // Collect form data
  // var eventData = {
  //   title: form.title.value,
  //   date: form.date.value,
  //   description: form.description.value
  // };

  // Make an HTTP request to the external endpoint
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'https://example.com/submit-event'); // Replace with the actual endpoint URL
  // xhr.setRequestHeader('Content-Type', 'application/json');

  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if (xhr.status === 200) {
  //       // Request succeeded
  //       console.log('Event submitted successfully!');
  //     } else {
  //       // Request failed
  //       console.error('Failed to submit event.');
  //     }
  //   }
  // };
  alert("Form submitted");
  // xhr.send(JSON.stringify(eventData));
}