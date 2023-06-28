// Sample event data
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Replace with your Ethereum node URL

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
const SystemAddress = '0x1234573...';


const EventManager = new ethers.Contract(EventManagerAddress, contract1ABI, provider);
const System = new ethers.Contract(SystemAddress, contract2ABI, provider);
const Ticket = new ethers.Contract(TicketAddress, contract2ABI, provider);
const TicketToken = new ethers.Contract(TicketTokenAddress, contract2ABI, provider);
const TokenManager = new ethers.Contract(TokenManagerAddress, contract2ABI, provider);

// fetch all events --> getEventList
function getEvents() {
  // Mocking the list of events
  events = [
    { id: 1, name: 'Jazbaa ft Pankaj Udas Live', date: '2023-06-25',description: 'In Ghazal, there is no barrier, mine or yours, old or new. It belongs to all and connects Hearts and Souls', ticketsavailable: true , ticketPrice: 100},
    { id: 2, name: 'Comedy Show by Uday', date: '2023-06-26' ,  ticketsavailable: true , ticketPrice: 130 ,description: 'His razor-sharp wit will cut deep in your weekly blues'},
    { id: 3, name: 'Event 3', date: '2023-06-27' , description: 'Concert by Atif', ticketPrice: 70 },
    {id:4, name:'Movie: abcd2sasasa', date: '2023-06-30', description: 'A movie by Stephen',random:'somerandomdata' , ticketPrice: 120}
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

// Function to generate event cards -->getEventDetails
function generateEventCards() {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';

  // global events ;
  const events = getEvents(); // Retrieve the list of events
  events.forEach(event => {

    const maincard = document.createElement('div');
    maincard.className = 'event-card';
    maincard.dataset.eventId = event.id;

    const card = document.createElement('div');
    card.className = 'header-section';
    card.dataset.eventId = event.id;

    const name = document.createElement('h3');
    name.innerText = event.name;
    card.appendChild(name);

    const description = document.createElement('p');
    description.innerText = event.description;
    card.appendChild(description);
    card.addEventListener('click', function(){ toggleVisibility(maincard)});
    const details = document.createElement('div');
    details.className = 'event-details hidden';

    const date = document.createElement('p');
    date.innerText = event.date;
    details.appendChild(date);
    const price = document.createElement('p');
    price.innerText = "Ticket Price (ETH) : "+event.ticketPrice;
    details.appendChild(price);
    const newbutton = document.createElement('button');
    if (event.ticketsavailable){
      newbutton.setAttribute('id','cancel-event-btn');
      newbutton.className = 'hidden';
      newbutton.textContent = "Book tickets";
      newbutton.addEventListener('click', function(){ openBookingScreen(event.id)});
    }else{
      newbutton.setAttribute('id','cancel-event-btn');
      newbutton.className = 'hidden';
      newbutton.textContent = "Sold Out! Check Resale tickets";
      newbutton.style.backgroundColor = "red";
      newbutton.addEventListener('click', function(){ openScalpingScreen(event.id)});
    }
    details.appendChild(newbutton);
    maincard.appendChild(card)
    maincard.appendChild(details);
    eventList.appendChild(maincard);
    
  });

  // Add event listener to the event list container
  //eventList.addEventListener('click', handleEventClick);
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

  console.log(event.id);
  document.getElementById('event-id').value = event.id;
  document.getElementById('ticket_price').value = event.ticketPrice;
  document.getElementById('price').textContent = event.ticketPrice

  // Get email from login form and pre-fill in booking form
  const email = document.getElementById('email').value;
  document.getElementById('booking-email').value = email;

  // Hide home screen and show booking screen
  document.getElementById('home-screen').style.display = 'none';
  document.getElementById('booking-screen').style.display = 'block';
}

// Function to handle booking tickets --> purchaseTickets 
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

// Artist events--?> get eventlist filter by artist id
function myEvents(){
  const eventData = [
    {
      name: "Jazbaa ft Pankaj Udas Live",
      eventId: 1232,
      description: "In Ghazal, there is no barrier, mine or yours, old or new. It belongs to all and connects Hearts and Souls"
    },
    {
      name: "Comedy Show by Uday",
      eventId: 2132,
      description: "His razor-sharp wit will cut deep in your weekly blues"
    },
    {
      name: "Movie: Name",
      eventId: 1111,
      description: "A movie by Stephen"
    }]
  return eventData;
}

//get event details--> getEventDetails filter by eventID
function eventSummary(eventId){
  const detailsData = [
    { key: 'EventID', value: eventId },
    { key: 'Date', value: '06 July 2023' },
    { key: 'Price', value: '130' },
    { key: 'Total Collection', value: '12300' }
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
      newbutton.addEventListener('click', function(){ cancelevent(event.eventId)});
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

//for cancelling event -> cancelEvent

function cancelevent(eventid){
  abc = confirm("This event will be cancelled and all advance payments will be refunded. Please note that you will be charged 100"+" ETH as a cancellation fee.")
  if (abc){
    console.log("Clicked button for event: " + eventid )
  }
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

function openScalpingScreen(eventId){
  const element = document.getElementById('scalping-popup-data');
  element.innerHTML = '';
  fetchScalpingData(eventId)
    .then(data => {
      // Generate HTML cards for each user offering pre-owned tickets
      data.forEach(ticket => {
        const card = createScalpingCard(ticket);
        element.appendChild(card);
      });
    });
 
  document.getElementById('scalping-popup').style.display = 'block';
}
function fetchScalpingData(eventId) {
  // Mocked data for demonstration purposes
  return new Promise(resolve => {
    setTimeout(() => {
      const data = [
        {
          owner: 'John Doe',
          walletId: '0x1234567890',
          numTickets: 2,
          offerPrice: 50.00
        },
        {
          owner: 'Jane Smith',
          walletId: '0x0987654321',
          numTickets: 1,
          offerPrice: 30.00
        },
        {
          owner: 'Jane Smith',
          walletId: '0x0987654321',
          numTickets: 1,
          offerPrice: 30.00
        },
        {
          owner: 'Jane Smith',
          walletId: '0x0987654321',
          numTickets: 1,
          offerPrice: 30.00
        },
        // Add more ticket objects as needed
      ];
      resolve(data);
    }, 1000);
  });
}
function createScalpingCard(ticket) {
  const card = document.createElement('div');
  card.classList.add('scalping-card');
  const ownerName = document.createElement('p');
  ownerName.innerText = `Owner: ${ticket.owner}`;
  card.appendChild(ownerName);
  const walletId = document.createElement('p');
  walletId.innerText = `Wallet ID: ${ticket.walletId}`;
  card.appendChild(walletId);
  const numTickets = document.createElement('p');
  numTickets.innerText = `Number of Tickets: ${ticket.numTickets}`;
  card.appendChild(numTickets);
  const offerPrice = document.createElement('p');
  offerPrice.innerText = `Offer Price: $${ticket.offerPrice.toFixed(2)}`;
  card.appendChild(offerPrice);
  const buyButton = document.createElement('button');
  buyButton.innerText = 'Buy';
  buyButton.classList.add('buy-button');
  buyButton.addEventListener('click', () => {
    buyTicket(ticket);
  });
  card.appendChild(buyButton);
  return card;
}
function buyTicket(ticket) {
  // Logic to handle the purchase of the pre-owned ticket
  console.log('Buying ticket:', ticket);
}

function close_scalping_option(){
  document.getElementById('scalping-popup').style.display = 'none';
}

//Create new event handler--function createEvent(string memory ...)

function submit_new_event(event){
  event.preventDefault();
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
  const newEventForm = document.getElementById('new-event-form');
  newEventForm.style.display = 'none';
  // xhr.send(JSON.stringify(eventData));
}
function view_my_tickets(){
const email = document.getElementById('email').value;
const user = validateEmail(email);
const { name, walletId } = user;
tickets = fetchbookedtickets(walletId);
const tickets_screen = document.getElementById('mytickets-screen');
// Hide booking screen and show confirmation screen
document.getElementById('home-screen').style.display = 'none';
document.getElementById('mytickets-screen').style.display = 'block';
const ticketList = document.getElementById('ticket-list');
// Clear existing tickets
ticketList.innerHTML = '';
tickets.forEach(ticket => {
  const ticketElement = document.createElement('div');
  ticketElement.classList.add('ticket');
  const ticketid = document.createElement('div');
  ticketid.classList.add('ticket-id');
  ticketid.style.writingMode = "tb-rl";
  ticketid.style.transform = "rotate(-180deg)";
  ticketid.textContent = "# "+ticket.id;
  const ticketInfo = document.createElement('div');
  ticketInfo.classList.add('ticket-info');
  const eventName = document.createElement('div');
  eventName.classList.add('event-name');
  eventName.textContent = ticket.Eventname;
  ticketInfo.appendChild(eventName);
  const eventDate = document.createElement('div');
  eventDate.classList.add('event-date');
  eventDate.textContent = ticket.date;
  ticketInfo.appendChild(eventDate);
  const tktid = document.createElement('div');
  tktid.classList.add('seat-no');
  tktid.textContent = "Seat: "+ticket.seatno;
  ticketInfo.appendChild(tktid);
  const sellButton = document.createElement('button');
  sellButton.innerText = 'ReSell';
  sellButton.classList.add('buy-button');
  sellButton.style.marginTop="40px";
  sellButton.addEventListener('click', () => {
    sellTicket(ticket);
  });
  ticketInfo.appendChild(sellButton);
  const ticketImageContainer = document.createElement('div');
  ticketImageContainer.classList.add('ticket-image');
  const ticketImage = document.createElement('img');
  ticketImage.src = '../img/ticket-image.jpg'; // Replace with the actual path to the ticket image
  ticketImage.alt = 'Ticket Image';
  ticketImageContainer.appendChild(ticketImage);
  const ticketQRContainer = document.createElement('div');
  ticketQRContainer.classList.add('ticket-image');
  const ticketQRImage = document.createElement('img');
  ticketQRImage.src = 'img/ticket-qr-image.png'; // Replace with the actual path to the ticket image
  ticketQRImage.alt = 'Ticket QR';
  ticketQRContainer.appendChild(ticketQRImage);
  ticketElement.appendChild(ticketid);
  ticketElement.appendChild(ticketInfo);
  ticketElement.appendChild(ticketQRContainer);
  ticketElement.appendChild(ticketImageContainer);
  
  ticketList.appendChild(ticketElement);
});
}
function gotohomescreen(){

document.getElementById('mytickets-screen').style.display = 'none';
document.getElementById('home-screen').style.display = 'block';
}
function fetchbookedtickets(walletId){
tickets = [
  { id: 2647892, Eventname: 'Event 1', date: '2023-06-25', description: 'Description of event' , seatno: 1023 },
  { id: 238732, Eventname: 'Event 2', date: '2023-06-26' , seatno: 10 },
  { id: 33298120, Eventname: 'Event 3', date: '2023-06-27', seatno: 57 },
  {id:4328297, Eventname:'Movie: abcd2sasasa', date: '2023-06-30', random:'somerandomdata', seatno: 28}
];
return tickets;
}
function ticketcountvalidator(e){
const el = e.target || e
tp = document.getElementById('ticket_price').value;

if(el.type == "number" && el.max && el.min ){
  let value = parseInt(el.value)
  el.value = value // for 000 like input cleanup to 0
  let max = parseInt(el.max)
  let min = parseInt(el.min)
  if ( value > max ) el.value = el.max
  if ( value < min ) el.value = el.min
}
for (let i = el.min; i<=el.max; i++){
  if (i <= parseInt(el.value)){
    document.getElementById('seat_id_'+i+'_label').style.display="block";
    document.getElementById('seat_id_'+i).style.display="block";
    document.getElementById('seat_id_'+i).required = true;
    document.getElementById('price').textContent = tp * el.value;
  }else{
    document.getElementById('seat_id_'+i+'_label').style.display="none";
    document.getElementById('seat_id_'+i).style.display="none";
    document.getElementById('seat_id_'+i).required = false;
    
  }
}
}