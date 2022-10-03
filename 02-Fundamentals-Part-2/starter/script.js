const calcAverage = (a,b,c) =>  (a+b+c)/3;

const avgDolphins = calcAverage(65, 54, 49);
const avgKoalas = calcAverage(23, 34, 27);

console.log(`Average Dolphin score ${avgDolphins} and average koala score ${avgKoalas}`);


function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins take the win`)
  } else {
    console.log(`Koalas take the lead`)
  }
}


Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

 Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log()

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
