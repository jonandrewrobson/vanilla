var hotel = {
    name: 'COOL GUY HOTEL',
    rooms: 670,
    booked: 4,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
}

var elHotelName = document.getElementById('hotelName');
elHotelName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability ();

