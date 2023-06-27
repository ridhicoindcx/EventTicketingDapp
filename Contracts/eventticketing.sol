// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "hardhat/console.sol";

contract TicketToken is Initializable, ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        initialize();
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC20_init("TicketToken", "TKT");
        __Ownable_init();
        __UUPSUpgradeable_init();
        console.log(msg.sender);
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

}

contract TokenManager {
    event Bought(uint256 amount);
    event Sold(uint256 amount);

    TicketToken public token;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        token = new TicketToken();
    }
        
    function buyToken() payable public {
        uint256 amountTobuy = msg.value;
        uint256 tokenBalance = token.balanceOf(address(this));
        require(amountTobuy > 0, "You need to send some ether");
        require(amountTobuy <= tokenBalance, "Not enough tokens in the reserve");
        token.transfer(msg.sender, amountTobuy);
        emit Bought(amountTobuy);
    }

    function sellToken(uint256 amount) public {
        require(amount > 0, "You need to sell at least some tokens");
        token.approve(address(this), amount);
        payable(msg.sender).transfer(amount);
        emit Sold(amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return token.balanceOf(account);
    }

    function increaseAllowance(address spender, uint256 addedValue) public {
        token.increaseAllowance(spender, addedValue);
    }
}

contract Ticket is Initializable, ERC721EnumerableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        initialize();
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC721_init("Ticket", "TKS");
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function safeMint(address to, uint256 eventId, uint256 seatNumber) public onlyOwner {
        uint256 tokenId = uint256(keccak256(abi.encode(eventId, seatNumber)));
        _safeMint(to, tokenId);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}

contract EventManager {
    struct Event {
        uint256 eventId;
        string eventName;
        uint256 maxSeats;
        uint256 availableSeats;
        uint256 ticketPrice;
        uint timeDate;
        uint slot;
        string artist;
        string eventDescription;
        bool cancelled;
        bool completed;
        bool[] seatMap;
    }

    mapping(uint256 => Event) public events;
    uint256[] private eventIdArray;

    constructor() {}

    function createEvent(uint256 _eventId, string memory _eventName, uint256 _maxSeats, uint256 _ticketPrice, uint timeDate, uint slot, string memory _artist, string memory _eventDescription) public returns (uint256) {     
        events[_eventId] = Event(_eventId, _eventName, _maxSeats, _maxSeats, _ticketPrice, timeDate, slot, _artist, _eventDescription, false, false, new bool[](_maxSeats));
        eventIdArray.push(_eventId);
        return _eventId;
    }

    function getDateTime(uint256 _eventId) public view returns (uint256) {
        return events[_eventId].timeDate;
    }

    function getTicketPrice(uint256 _eventId) public view returns (uint256) {
        return events[_eventId].ticketPrice;
    }

    function getAvailableSeats(uint256 _eventId) public view returns (uint256) {
        return events[_eventId].availableSeats;
    }

    function markCancel(uint256 _eventId) public {
        events[_eventId].cancelled = true;
    }

    function markCompleted(uint256 _eventId) public {
        events[_eventId].completed = true;
    }

    function getEventList() public view returns (Event[] memory) {
        Event[] memory ret = new Event[](eventIdArray.length);
        for (uint i = 0; i < eventIdArray.length; i++) {
            ret[i] = events[eventIdArray[i]];    
        }
        return ret;
    }

    function getEventDetails(uint256 _eventId) public view returns (string memory, uint256, uint256, uint256, string memory) {
        return (events[_eventId].eventName, events[_eventId].maxSeats, events[_eventId].availableSeats, events[_eventId].ticketPrice, events[_eventId].artist);
    }

    function bookSeats(uint256 _eventId, uint256 _numTickets, uint256[] memory _seatNumber) public {
        events[_eventId].availableSeats -= _numTickets;
        for (uint256 i = 0; i < _numTickets; i++) {
            require(events[_eventId].seatMap[_seatNumber[i]] == false, "Selected seat already filled");
            events[_eventId].seatMap[_seatNumber[i]] = true;
        }
    }
}

contract System is TokenManager, EventManager {
    
    // EventManager public eventManager;
    Ticket public system;

    struct EventMetadata {
        address payable artistAddress;
        uint256 bookingPayment;
        uint256 collectedAmount;
        address payable[] guestAddresses;
        mapping(address => uint256) ticketsOwned;   
    }

    struct EventSlot {
        mapping(uint => bool) booking;
    }

    mapping(uint256 => EventMetadata) public eventsMetadata;
    mapping(uint256 => EventSlot) eventSlots;
    event NewEvent(uint256 eventId, string eventName, uint256 maxSeats, uint256 ticketPrice, uint timeDate, string artist, string eventDescription, address artistAddress, uint256 payment);
    event TicketPurchased(uint256 eventId, address buyer, uint256 numTickets);
    event TicketTransferred(uint256 eventId, address from, address to, uint256 numTickets);

    constructor() {
        system = new Ticket();
    }

    // Slot will be 0, 1 ,2... based on how many slots we divide on the UI
    function createEvent(string memory _eventName, uint256 _maxSeats, uint256 _ticketPrice, uint timeDate, uint slot, string memory _artist, string memory _eventDescription) public returns (uint256 _eventId) {
        uint256 bookingAmount = ((_ticketPrice * _maxSeats) * 10 / 100); // 10% of total value as advance booking charge 
        console.log(bookingAmount);
        console.log(token.balanceOf(msg.sender));
        require(token.balanceOf(msg.sender) >= bookingAmount, "Insufficient Balance");
        token.transferFrom(msg.sender, address(this), bookingAmount);
        _eventId = block.timestamp;
        eventsMetadata[_eventId].artistAddress = payable(msg.sender);
        eventsMetadata[_eventId].bookingPayment = bookingAmount;
        eventsMetadata[_eventId].guestAddresses = new address payable[](0);
        createEvent(_eventId, _eventName, _maxSeats, _ticketPrice, timeDate, slot, _artist, _eventDescription);
        emit NewEvent(_eventId, _eventName, _maxSeats, _ticketPrice, timeDate, _artist, _eventDescription, msg.sender, bookingAmount);
        return _eventId;
    }

    function purchaseTickets(uint256 _eventId, uint256 _numTickets, uint256[] memory _seatNumber) public {
        uint256 ticketPrice = getTicketPrice(_eventId);
        require(_numTickets == _seatNumber.length, "Invalid number of seats selected");
        uint256 bookingAmount = ticketPrice * _numTickets;
        uint256 availableSeats = getAvailableSeats(_eventId);
        require(availableSeats >= _numTickets, "Not enough available seats");
        require(token.balanceOf(msg.sender) >= bookingAmount, "Insufficient Balance");
        token.transferFrom(msg.sender, address(this), bookingAmount);
        eventsMetadata[_eventId].ticketsOwned[msg.sender] += _numTickets;
        eventsMetadata[_eventId].collectedAmount += bookingAmount;
        eventsMetadata[_eventId].guestAddresses.push(payable(msg.sender));
        bookSeats(_eventId, _numTickets, _seatNumber);
        emit TicketPurchased(_eventId, msg.sender, _numTickets);
        for (uint256 i = 0; i < _numTickets; i++) {
            system.safeMint(msg.sender, _eventId, _seatNumber[i]);
        }
    }

    function cancelEvent(uint256 _eventId) public {
        require(msg.sender == eventsMetadata[_eventId].artistAddress, "Only organizer can cancel the event");
        uint256 timeDate = getDateTime(_eventId);
        uint256 ticketPrice = getTicketPrice(_eventId);
        refundTheAdvance(timeDate, _eventId);
        refundTicketAmount(ticketPrice, _eventId);
        markCancel(_eventId);
    }

    function refundTheAdvance(uint256 timeDate, uint256 _eventId) private {
        uint diff = (timeDate - block.timestamp) / 60 / 60 / 24;
        uint256 finalAmount = eventsMetadata[_eventId].bookingPayment;
        if(diff > 10 && diff < 30) {
            finalAmount = finalAmount - (finalAmount * 15 /100); //Deducting 15%
        } else if(diff < 10) {
            finalAmount = finalAmount - (finalAmount * 30 /100); //Deducting 30%
        }
        require(token.balanceOf(address(this)) >= finalAmount, "Insufficient Balance in contract");
        token.transferFrom(address(this), eventsMetadata[_eventId].artistAddress, finalAmount);
    }

    function refundTicketAmount(uint256 ticketPrice, uint256 _eventId) private {
        for (uint256 i = 0; i < eventsMetadata[_eventId].guestAddresses.length; i++) {
            uint256 refundAmount = eventsMetadata[_eventId].ticketsOwned[eventsMetadata[_eventId].guestAddresses[i]] * ticketPrice;
            require(token.balanceOf(address(this)) >= refundAmount, "Insufficient Balance in contract");
            token.transferFrom(address(this), eventsMetadata[_eventId].artistAddress, refundAmount);
            eventsMetadata[_eventId].collectedAmount -= refundAmount;
        }
    }

    function completeEvent(uint256 _eventId) public {
        require(msg.sender == eventsMetadata[_eventId].artistAddress, "Only organizer can cancel the event");
        uint diff = (block.timestamp - events[_eventId].timeDate) / 60 / 60 / 24;
        require(diff > 0, "Cannot complete the event before the date");
        payTheArtist(_eventId);
        markCompleted(_eventId);
    }

    function payTheArtist(uint256 _eventId) private {
        uint256 payableAmount = eventsMetadata[_eventId].collectedAmount - (eventsMetadata[_eventId].collectedAmount * 40/100); // Deducting 40% theater fees
        require(token.balanceOf(address(this)) >= payableAmount, "Insufficient Balance in contract");
        token.transferFrom(address(this), eventsMetadata[_eventId].artistAddress, payableAmount);
    }

    function transferTickets(uint256 _eventId, address _to, uint256 _numTickets, uint256 _askedPrice) public {
        require(eventsMetadata[_eventId].ticketsOwned[msg.sender] >= _numTickets, "Not enough tickets owned");
        uint256 bookingAmount = events[_eventId].ticketPrice * _numTickets;
        require(bookingAmount >= _askedPrice, "Cannot sell ticket for more price then original");
        require(events[_eventId].availableSeats >= _numTickets, "Not enough available seats");
        require(token.balanceOf(msg.sender) >= _askedPrice, "Insufficient Balance");
        token.transferFrom(_to, msg.sender, _askedPrice);
        for (uint256 i = 0; i < _numTickets; i++) {
            uint256 tokenId = system.tokenOfOwnerByIndex(msg.sender, i);
            system.safeTransferFrom(msg.sender, _to, tokenId);
        }
        eventsMetadata[_eventId].ticketsOwned[msg.sender] -= _numTickets;
        eventsMetadata[_eventId].ticketsOwned[_to] += _numTickets;
        emit TicketTransferred(_eventId, msg.sender, _to, _numTickets);
    }
}
