'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// Start IIFE
// immediately invoked function expression

//   (function () {
//     console.log(`This expression will run once`);
//   }
// )();

// (() => console.log(`This will also never run again`))();

// stop IIFE

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const input1 = parseInt(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     // console.log(input1 > -1);
//     Number.isNaN(input1) &&
//     input1 < this.answers.length ? this.registerNewAnswer() : this.answers[input1]++;
//     // console.log(poll);

//     this.displayResult(poll.answers);
//   },
//   displayResult(type = 'array') {
//     this.answers = type;
//     // console.log(typeof this.answers);
//     console.log(type);
//     Array.isArray(type)
//       ? console.log(type)
//       : console.log(`Poll result is ${type}`);
//   },
//   // displayResult(type = 'array') {
//   //   if (type === 'array') {
//   //     console.log(this.answers);
//   //   } else if (type === 'string') {
//   //     // Poll results are 13, 2, 4, 1
//   //     console.log(`Poll results are ${this.answers.join(', ')}`);
//   //   }
//   // },
// };
// const displayResult = poll.displayResult.bind(poll);
// const query = poll.registerNewAnswer;

// displayResult(`12, 17, 34, 56`);
// // displayResult.call({ answers: [5, 2, 3] }, 'string');

// // document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
// document.querySelector('.poll').addEventListener('click', query.bind(poll));

// poll.registerNewAnswer();

//////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// // call and apply
// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a flight on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
//     console.log(this);
//   },
// };

// lufthansa.book(104, 'Tobenna');
// lufthansa.book(104, 'John');

// const delta = {
//   airline: 'delta',
//   iatacode: 'DL',
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(delta, 66, 'Martha');

// const swiss = {
//   airline: 'Swiss',
//   iatacode: 'SW',
//   bookings: [],
// };

// book.call(swiss, 302, 'Tobenna');
// const flightData = [282, 'Tobenna'];
// // apply methid
// // apply spreads the array
// book.apply(swiss, flightData);

// // bind
// const bookDelta = book.bind(delta);
// const booklufthansa = book.bind(lufthansa);
// const bookswiss = book.bind(swiss);

// bookDelta(100, 'Chika');
// const bookDelta10 = book.bind(delta, 10)
// bookDelta10('Zander')

// lufthansa.planes = 100;
// lufthansa.buyplanrs = function() {
//   this.planes++
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplanrs.bind(lufthansa));

//  Partial application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.2);
// console.log(typeof addVat);

const tax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTax = tax(0.2);

console.log(addTax(1000));

// Function returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const ar = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hey')('tobe');

// const greeterHello = ar('Hello');
// greeterHello('Jonas');
// greeterHello('Steven');
// ar('Hello')('tobe');

// HOF and CB functins
// // callback function with low level of abstraction
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');

//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function with high level of abstraction
// const transformer = function (str, fn) {
//   console.log(`original Sting: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by; ${fn.name}`);
// };

// transformer('Javascipt is the best', upperFirstWord);
// transformer('Javascipt is the best', oneWord);

// primitive vs refernce
// const flight = 'LH234';
// const tobenna = {
//   name: 'Tobenna Umeh',
//   passport: 2348160357664,
// };
// // console.log(tobenna.passport);

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 2348160357664) {
//     alert('Check in');
//   } else {
//     alert('wrong passport');
//   }
// };

// // NB the argument and object are scoked to the same referenve in memory
// checkIn(flight, tobenna);
// console.log(flight);
// console.log(tobenna);

// Defualt Params
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH102', 2, 20000);
// createBooking('BSg102', 4);
// console.log(bookings);
