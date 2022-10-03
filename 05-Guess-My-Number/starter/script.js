'use strict';

// let guessingGame = {
//   num: Math.round(Math.random() * 20),
//   score: '',
//   highScore: 0,
// };

// let btn = document.querySelector('.again').addEventListener("click", function() {

// let num = Math.round(Math.random() * 20);
// console.log(num);

// console.log(document.querySelector(`.message`).textContent);
// });

let num = Math.round(Math.random() * 20);
let guess = '';
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');


document.querySelector('.check').addEventListener('click', function () {
  guess = Number( document.querySelector(`.guess`).value);

  if (guess !== num) {
    message.textContent = 'Try again';
    score.textContent = parseInt(`${score.textContent - 1}`);
    if (typeof(guess) != 'number') {
      alert('Please put a number')
    } 

    if (num > guess) {
      if (num - guess <= 2) {
        alert(`Guess is low`);
      } else {
        alert(`Guess is too low`);
      }
    } else {
      if (guess - num <= 2) {
        alert(`Guess is high`);
      } else {
        alert(`Guess is too high`);
      }
    }
  } else if (guess === num) {
    message.textContent = 'Congrats';
    highScore.textContent = score.textContent;
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }
    document.body.style.backgroundColor = 'green'
  }

  document.querySelector('.again').addEventListener('click', function () {
    num = Math.round(Math.random() * 20);
    score.textContent = 20;
    document.body.style.backgroundColor = 'black'
  });
});
