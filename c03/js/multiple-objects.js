// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked; 
  };
}

// Create two hotel objects
var quayHotel = new Hotel('Quay Hotel', 40, 25);
var parkHotel = new Hotel('Park Hotel', 120, 77);

// Update the HTML for the page
var hotelDetails1 = quayHotel.name + ' rooms: ';
    hotelDetails1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
    elHotel1.textContent = hotelDetails1;

var hotelDetails2 = parkHotel.name + ' rooms: ';
    hotelDetails2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = hotelDetails2;