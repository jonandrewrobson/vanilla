var hotel = {
    name: 'Park Hotel',
    rooms: 120,
    booked: 7,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
}

var elHotelName = document.getElementById('hotelName');
elHotelName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability ();

