// Sample event data

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