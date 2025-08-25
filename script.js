'use strict';

// const bookings = [];

// const createFlight = function (flightNum, numPassengers = 1999, price = 1 * 4) {
//   // Setting default values by using ES6
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 1999;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createFlight('LHEIR348');
// createFlight('Fleith747');
// createFlight('BDIE73', 'Tesing748');

const flight = 'BIDE656';
const jafary = {
  name: 'Jafary Mdegela',
  passport: '8587373793i',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LHERY636';
  passenger.name = 'Mr' + passenger.name;
  if (passenger.passport == '8587373793i') {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jafary);
console.log(flight);
console.log(jafary);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jafary);
checkIn(flight, jafary);
