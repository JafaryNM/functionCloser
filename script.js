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

// const flight = 'BIDE656';
// const jafary = {
//   name: 'Jafary Mdegela',
//   passport: '8587373793i',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LHERY636';
//   passenger.name = 'Mr' + passenger.name;
//   if (passenger.passport == '8587373793i') {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jafary);
// console.log(flight);
// console.log(jafary);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(jafary);
// checkIn(flight, jafary);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...otherWords] = str.split(' ');
//   return [first.toUpperCase(), ...otherWords].join(' ');
// };

// // Higher Order function
// const transformer = function (str, fn) {
//   console.log(`Original String ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Transformed method ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// // Javascript using call back all the time

// const high5 = function () {
//   console.log('Hi there');
// };

// document.body.addEventListener('click', high5);

// Function return function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} , ${name}`);
//   };
// };

// greet('Hellow')('Mosses');
// const greaterHey = greet('Hey');
// greaterHey('Jonas');
// greaterHey('Jafary');
``;
// // Change in arrow function

// const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

// greetArr('JaffaryArrow')('Testing');

const airTanzaniaMagufuli = {
  airline: 'Air Tanzania Magufuli',
  airCode: 'LHB56',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      ` ${name} book a seat on ${this.airline} flight with aircode ${this.airCode}, flight ${flightNum}`
    );
    this.bookings.push({ flight: `${this.airCode}${(this.flightNum, name)}` });
  },
};

// Console Maguruli airline

airTanzaniaMagufuli.book(4949, 'Air Tanzania 7575');

const airTanzaniaSamia = {
  airline: 'Air Tanzania Samia',
  airCode: 'LHB78',
  bookings: [],
};

// Create new function

const book = airTanzaniaMagufuli.book;
// But this do not work return undefined values
// book(4747, 'Air Tanzna');

const airTanzaniaNoPresident = {
  airline: 'Air Tanzania Non Presidential',
  airCode: 'LIF',
  bookings: [],
};

// Solving by calling method

book.call(airTanzaniaSamia, 59595, 'Air Samia 2025');
book.call(airTanzaniaMagufuli, 8575, 'Air Magufuli7575');
book.call(airTanzaniaNoPresident, 8075, 'Air NoPresidential ');
console.log(airTanzaniaSamia);
console.log(airTanzaniaMagufuli);
console.log(airTanzaniaNoPresident);

// Solving by apply

const flightData = [58558, 'Air Samia 48848'];
book.apply(airTanzaniaSamia, flightData);
book.call(airTanzaniaSamia, ...flightData);
console.log('air Samia Apply', airTanzaniaSamia);

//  Solving by bind method

const airMagufuli = book.bind(airTanzaniaMagufuli);
const airSamia = book.bind(airTanzaniaSamia);
const airSamiaPresidential = book.bind(airTanzaniaSamia, 353);
airSamia(47474, 'Air Samia Testing');
airSamiaPresidential('Air Samia Presidential');
airMagufuli(57557, 'Air Magufulie7558');

// With event listners method

airTanzaniaMagufuli.plane = 10;
console.log(this);
airTanzaniaMagufuli.buy = function () {
  this.plane++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', airTanzaniaMagufuli.buyPlane);

// Partial applications

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.5, 1000));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(1000));
// const addTax = (rate, value) => value + value * 0.23;
