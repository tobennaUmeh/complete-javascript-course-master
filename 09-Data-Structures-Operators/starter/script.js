'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const eventFlight = flights.split('+');

for (const i of eventFlight) {
  const siEvents = i.split(';');
  // console.log(siEvents);
  let a = siEvents[0].replaceAll('_', ' ').trim();
  const b = siEvents[1].slice('0', '3').toUpperCase();
  const c = siEvents[2].slice('0', '3').toUpperCase();
  const d = `(${siEvents[3]})`;

  a.includes('Delayed') ? a = a.padStart(a.length + 2, '🔴') : a;
  const finalText = `${a} from ${b} to ${c} ${d}`.padStart(42)

  console.log(finalText);
}

// console.log(eventFlight);

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const textArea = document.querySelector('textarea').value;
//   const it = [];
//   let a =  ''

//   for (const [i, lines] of textArea.split('\n').entries()) {
//     // console.log(lines);

//     const [first, second] = lines.toLowerCase().trim().split('_');
//     // console.log(first, second);
//      a = [first, second.replace(second[0], second[0].toUpperCase())].join(
//       ''
//     );
//     it.push(a);
//     // console.log(it);
//     let space = lo(it) + 2;
//     console.log(a.padEnd(space, '✅'));
//   }
//   console.log(lo(it));

// });

document.querySelector('button').addEventListener('click', function () {
  const textArea = document.querySelector('textarea').value;
  const it = [];
  let a = '';

  for (const [i, lines] of textArea.split('\n').entries()) {
    // console.log(lines);
    // console.log(i);
    const [first, second] = lines.toLowerCase().trim().split('_');
    // console.log(first, second);
    a = [first, second.replace(second[0], second[0].toUpperCase())].join('');
    it.push(a);
    // console.log(it);

    console.log(`${a.padEnd('20')}${'🛺'.repeat(i + 1)}`);
  }
});

function lo(arra) {
  var max_str = arra[0].length;
  var ans = arra[0];
  for (var i = 1; i < arra.length; i++) {
    var maxi = arra[i].length;
    if (maxi > max_str) {
      ans = arra[i];
      max_str = maxi;
    }
  }
  return ans.length;
  // console.log(lo(['svjjkvbn', 'ab']));
}

// const underscore_case = function (str) {
//   const [first, second] = str.toLowerCase().trim().split('_');
//   // console.log(first, second);
//   console.log(
//     [first, second.replace(second[0], second[0].toUpperCase())].join('')
//   );
// };

// underscore_case(`tobenna_umeh`);
// underscore_case(` first_name`);
// underscore_case(`Some_Variable`);
// underscore_case(`  calculate_AGE`);
// underscore_case(`delayed_departure`);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//  from Here

// const airline = `Air Nigeris`;
// const plane = `A320`;

// // split
// const splitEx = `a_very_nice_day`;
// console.log(splitEx.split('_'));
// const replaceA = splitEx.replaceAll('_', '+');
// console.log(replaceA);
// const nameSplit = `Tobenna Umeh`;

// const [firstName, LastName] = nameSplit.split(' ');
// console.log(firstName, LastName);

// const checkMiddleSeat = function (seat) {
//   // b and e ere middle seats
//   // const middleRows = new Set ()
//   // middleRows.add('B')
//   // middleRows.add('e')
//   // seat.indexof()
//   const s = seat.slice(-1);
//   s === 'B' || s === 'E'
//     ? console.log(`You are lucky`)
//     : console.log(`You arent`);
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // replacing
// const announcements = `All pssengers please procede to the boardinf door 23, Boarding door 23!`;
// console.log(announcements.replaceAll('door', 'gate'));

// // Booleans
// // includes, stratswith and endswith
// const planeEx2 = 'Airbus A320neo';
// console.log(planeEx2.startsWith('Air'));
// console.log(planeEx2.includes('Air'));
// console.log(planeEx2.endsWith('neo'));

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// //Destructuring Objects
// const { name, categories, openingHours } = restaurant;
// // console.log(name);
// // console.log(categories);
// // console.log(openingHours);

// //  to specify the names
// const { name: restaurantNames, openingHours: restaurantOpeningHours } =
//   restaurant;
// // console.log('specify');
// // console.log(restaurantNames);
// // console.log(restaurantOpeningHours);

// // Destructuring and default values
// const { mainMenu: realFood = [], specials = {} } = restaurant;
// // console.log('destructuring objects and default values');
// // console.log(specials);
// // console.log(realFood);

// // Mutating variables
// let a = 220;
// let b = 230;
// const obj = { a: 1, b: 20, c: 8 };
// ({ a, b } = obj);
// // console.log(a, b);

// // Nested Objects

// const {
//   sat: { open, close },
// } = openingHours;
// // console.log('Destructuring nested array');
// // console.log(open, close);

// //Nested objects default values

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log('Destructuring and default values obj');
// // console.log(o, c);

// // Destructuring arrays

// const [starter, main] = restaurant.order(2, 0);

// // console.log(`${starter}, ${main}`);

// // let [main, , secondary, third] = restaurant.categories;
// // console.log(main);
// // console.log(secondary);
// // console.log(third);
// // console.log(main, secondary);

// // // swithcing man and decondary

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;

// // // console.log(main, secondary);

// // // using destructuring method

// // // mutating arrray
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // nested array

// const nested = [1, 23, [84, 65]];

// const [j, , [k, l]] = nested;
// // console.log(j, k, l);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2
// const [gk1, ...fieldplayers1] = players1;
// const [gk2, ...fieldplayers2] = players2;

// // 3
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5
// const { team1, x: draw, team2 } = game.odds;

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} is the number of goals scored`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(`${players[i]} scored goal number  ${i + 1}`);
//   }
// };

// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log('team1 is the most likely to win');
// team1 > team2 && console.log('team2 is the most likely to win');

// // coding challenge #2

// // 1
// // console.log(game.scored);
// for (const [goalNo, player] of game.scored.entries()) {
//   console.log(`Goal ${goalNo + 1}: ${player}`);
// }

// // 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // 4
// let count = 0;
// const scores = game.scored;

// for (let [i, j] of scores.entries()) {
//   scores.forEach(element => {
//     if (element === j) {
//       count += 1;
//       // if (count >= 1){
//       //   count +=
//       console.log(`${j} has ${count} goal(s)`);
//       // }
//     }
//   });
//   count = 0;
// }
// console.log(count);
// console.log(game.scored);

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = new Set(gameEvents.values());
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// for (const [key, value] of gameEvents) {
//   const str = `a ${value}, occured at ${key}`;
//   console.log(str);
//   // console.log(key, value);
// }
// // HIS 3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4
// for (const [key, value] of gameEvents) {
//   key <= 45
//     ? console.log(`[FRIST HALF] ${key}: ${value}`)
//     : console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored */
