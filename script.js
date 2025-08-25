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

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} , ${name}`);
  };
};

greet('Hellow')('Mosses');
const greaterHey = greet('Hey');
greaterHey('Jonas');
greaterHey('Jafary');

// Change in arrow function

const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

greetArr('JaffaryArrow')('Testing');
