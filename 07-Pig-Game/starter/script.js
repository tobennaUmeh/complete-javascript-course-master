'use strict';

// plsyer score elements selected
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// what im adding

let playing,scores,currentScore,activePlayer;

// init 
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
}
init();



let logic = function() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

} 

// starting the game

// button roll
btnRoll.addEventListener('click', function () {
if (playing) {
  // generate a random roll
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  // display score
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check foe 1
  if (dice !== 1) {
    // add dice to score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch the player]
    logic();
  }
}
});


btnHold.addEventListener('click', function() {
  if (playing) {
  // Add curent score to actice player score and chck if score == 100, then finish game else switch 
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  // switch the player 
  // check for 100
  if (scores[activePlayer] >= 100)
  {
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceEl.classList.add('hidden');
  }
  else {
    logic();
  }
}
  
});

// new game 

btnNew.addEventListener('click', init)

// function dice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// const fu =

// document.querySelector('.btn--roll').addEventListener('click', function () {
//   document.querySelector('.dice').scr = `dice-${dice}.png`;
// });

// document.querySelector('.btn--roll').addEventListener('click', function () {
//     document.querySelector('.dice').scr = `dice-${dice()}.png`;
//   console.log('click');
// });
