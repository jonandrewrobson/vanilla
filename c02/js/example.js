// Variables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

// Concatenating variables
var welcome = greeting + name + message;

// Creating variables to hold sign details
var sign = 'Big Bird House';
var tiles= sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Getting element that has the id of greeting
var el = document.getElementById('greeting');

// Replacing content of that element with personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign and update contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles and update contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get element that has an id of subTotal then update content
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = ('$') + subTotal;

// Get element that has an id of subTotal then update content
var elShipping = document.getElementById('shipping');
elShipping.textContent = ('$') + shipping;

// Get element that has an id of grandTotal then update content
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = ('$') + grandTotal;