'use strict';

const bookings = [];

const createFlight = function (flightNum, numPassengers = 1999, price = 1 * 4) {
  // Setting default values by using ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 1999;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createFlight('LHEIR348');
createFlight('Fleith747');
createFlight('BDIE73', 'Tesing748');
