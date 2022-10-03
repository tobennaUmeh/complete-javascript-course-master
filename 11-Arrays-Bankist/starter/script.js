'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const createUsername = function (accs) {
//   accs.forEach(
//     acc =>
//       (acc.userName = acc.owner
//         .toLowerCase()
//         .split(' ')
//         .map(name => name[0])
//         .join(''))
//   );
// };
// createUsername(accounts);
// console.log(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display movements
// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}</div>
//       </div>
//       `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// displayMovements(account1.movements);

// UserName //////////////////////////////////
const createUsernames = accs => {
  accs.forEach(el => {
    // console.log(el.owner);
    el.username = el.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      // .map(el => el.slice(0, 1))
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);

let currentAccount, timeoutID;

const reloadData = () => {
  // LOgin View
  const balance = acc => {
    const bal = acc.movements.reduce((acu, cur) => {
      return acu + cur;
    }, 0);
    labelBalance.textContent = `${bal} EUR`;
  };
  balance(currentAccount);

  // moneyIn
  const moneyIn = acc => {
    const moneyIn = acc.movements
      .filter(acc => acc > 0)
      .reduce((acu, cur) => {
        return acu + cur;
      }, 0);
    labelSumIn.textContent = `${moneyIn} EUR`;
  };
  moneyIn(currentAccount);

  const moneyOut = acc => {
    const moneyOut = Math.abs(
      acc.movements
        .filter(acc => acc < 0)
        .reduce((acu, cur) => {
          return acu + cur;
        }, 0)
    );
    labelSumOut.textContent = `${moneyOut} EUR`;
  };
  moneyOut(currentAccount);

  // interestRate
  const interestRate = acc => {
    let interest = acc.movements.reduce((acu, cur) => {
      return acu + cur;
    }, 0);
    interest = (interest * acc.interestRate) / 100;
    labelSumInterest.textContent = interest;
  };
  interestRate(currentAccount);

  // Summary
  const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  displayMovements(currentAccount.movements);

  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    resetInput();
    labelWelcome.textContent = `Goodbye ${currentAccount.owner}`;
    reloadData();
    containerApp.classList.add('none');
  }, 5 * 10 ** 4);
};
// END RELOADDATA ;///////////////

// let inputPin;

const resetInput = () => {
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
};

// Login button ///////////////////////
btnLogin.addEventListener('click', e => {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount === undefined) {
    resetInput();
    alert(`Try Again`);
  } else {
    if (currentAccount.pin === parseInt(inputLoginPin.value)) {
      // Timeout  //////////////////////////
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        resetInput();
        labelWelcome.textContent = `Goodbye ${currentAccount.owner}`;
        reloadData();
        containerApp.classList.add('none');
      }, 5 * 10 ** 4);
      // document.querySelector('form').style.display = 'none';
      // document.querySelector('.welcome').style.display = 'none';
      labelWelcome.textContent = `Welcome back ${currentAccount.owner}`;
      resetInput();
      containerApp.classList.remove('none');
      reloadData();
      console.log(`login`);

      // logout
    } else {
      alert('wrong password');
      inputLoginPin.value = '';
    }
  }
  // console.log(inputPin);
});

////////// Transfer /////////
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const retrieveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(retrieveAcc);
  const val = Number(inputTransferAmount.value);
  console.log(val);
  retrieveAcc &&
    !(retrieveAcc === currentAccount) &&
    currentAccount.movements.reduce((acu, cur) => {
      return acu + cur;
    }, 0) >= val &&
    retrieveAcc.movements.push(val) &&
    currentAccount.movements.push(-Math.abs(val));

  // reloadData //////////////////////////////////
  reloadData();
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});

// Borrowing ///////////
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  currentAccount.movements.push(Number(inputLoanAmount.value));
  inputLoanAmount.value = '';
  reloadData();
});

// Deleting //////////////
btnClose.addEventListener('click', e => {
  e.preventDefault();
  const retrieveAcc = accounts.find(
    acc => acc.username === inputCloseUsername.value
  );
  const retrievePin = parseInt(inputClosePin.value);

  //// GETTING INDEX////
  const i = accounts.findIndex(acc => acc.username === inputCloseUsername.value);
  console.log(i);

  retrieveAcc &&
    retrievePin === retrieveAcc.pin &&
    /*i >= 0*/ accounts.splice(i, 1) &&
    alert(`Account with owner ${retrieveAcc.owner} has been deleted, Thanks`);
  reloadData();
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

// const balance = acc => {
//   const bal = acc.movements.reduce((acu, cur) => {
//     return acu + cur;
//   }, 0);
//   labelBalance.textContent = `${bal} EUR`;
// };
// balance(account1);

// monry In
// const moneyIn = acc => {
//   const moneyIn = acc.movements
//     .filter(acc => acc > 0)
//     .reduce((acu, cur) => {
//       return acu + cur;
//     }, 0);
//   labelSumIn.textContent = `${moneyIn} EUR`;
// };
// moneyIn(account1);
// const moneyOut = acc => {
//   const moneyOut = Math.abs(
//     acc.movements
//       .filter(acc => acc < 0)
//       .reduce((acu, cur) => {
//         return acu + cur;
//       }, 0)
//   );
//   labelSumOut.textContent = `${moneyOut} EUR`;
// };
// moneyOut(account1);

// deposits

const deposits = accs => {
  accs.forEach(acc => acc.movements.filter(acc => acc > 0));
};
const withdrawal = accs => {
  accs.forEach(acc => acc.movements.filter(acc => acc > 0));
};

// const balance = accs => {
//   accs.forEach(acc =>
//     acc.movements.reduce((acu, cur, i, arr) => {
//       console.log(`${cur} and ${acu}`);
//       return acu + cur;
//     }, 0)
//   );
// };

// balance(accounts);
// console.log(accounts);

// const user = 'Steven Thomas Williams';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(el => el[0])
//   // .map(el => el.slice(0, 1))
//   .join('')
// console.log(username);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const deposit = movements.filter(el => el > 0);
// const withdrawal = movements.filter(el => el < 0);

// console.log(deposit);
// console.log(withdrawal);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} is the shortform of ${value}`);
// });

// const currenciesUnique = new Set(['GBP', 'USD', 'USDT', 'GBP', 'EUR', 'EUR'])

// // value = key for sets
// currenciesUnique.forEach(function(value, key, set){
//   console.log(`${value} appeared ${key}`);
// })

// let arr = ['a', 'b', 'c', 'd', 'e'];

// function mv(movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// movements.forEach(mv);

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// arr.splice(2, 2);
// console.log(arr);

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice(1, 3);
//   console.log(dogsJuliaCorrected);
//   const dogsSorted = [...dogsJuliaCorrected, ...dogsKate];

//   dogsSorted.forEach(function (dog, i) {
//     const age = dog >= 3 ? 'n adult' : ' puppy';
//     console.log(`Dog number ${i + 1} is a${age}`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;

// //Map

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// const movementsDescriptions = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
// );
// // const movementsDescriptions = movements.map((mov, i, arr) => {
// //   if (mov > 0) {
// //    return `Movement ${i + 1}: You deposited ${mov}`;
// //   } else {
// //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// //   }
// // });
// console.log(movementsDescriptions);

// console.log(movements);
// console.log(movementsUSD);
