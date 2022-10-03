'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeM = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// let hidden = document.querySelector('.hidden');

for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
  // my solution

  // showModal[i].addEventListener('click', function () {
  //   console.log(`button clicked ${i}`);
  //   modal.style.display = 'block';
  // });
  showModal[i].addEventListener('click', open);
}

closeModal.addEventListener('click', closeM);
overlay.addEventListener('click', closeM);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeM();
  }
});
