'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
// const buttons = document.getElementsByTagName('button');
// const allSection = document.querySelectorAll('.section')

// console.log(allSection);
// console.log(header);
// console.log(buttons);
// console.log(document.getElementsByClassName('btn'));

// document.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!<button>';
// header.prepend(message); adds it as the first element in header
header.append(message); /*adds it as the last element in header*/
// header.after(message); adds it after element
// header.before(message); adds it before element
// header.append(message.cloneNode(true));
console.log(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // message.parentElement.removeChild(message)
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// document.documentElement.style.setProperty('--color-primary', 'beige');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();
  // const s1coords = section1.getBoundingClientRect();
  // console.log(`/////////////`);
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log(`Currrent scroll location X/Y`, scrollX, scrollY);
  // console.log(
  //   `Currrent viewport height X/Y`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
  alert(`Just Clicked`);
});

// const alertmouse = function (e) {
//   alert(`scrolled over`);

//   h1.removeEventListener('mouseenter', alertmouse);
// };
// h1.addEventListener('mouseenter', alertmouse);

// h1.onmouseenter = function (e) {
//   alert(`scrolled over`);
// };

// rgb(255,255,255 )
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomInt(1, 5));
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log(this, e.currentTarget);
//   // e.currentTarget = this therefori can use arrow
//   this.style.backgroundColor = randomColor();
//   // stop stopPropagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log(this);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// Scroolling
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const tabsContent = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');

tabsContainer.addEventListener('click', e => {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  // this check was done with closest because therr were other child elements in the doc
  const data = clicked.dataset.tab;

  if (!clicked) return;

  //    Tab bar
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  document
    .querySelectorAll('.operations__content')
    .forEach(e => e.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${data}`)
    .classList.add('operations__content--active');

  // }
});

//Menu fade
const nav = document.querySelector('.nav');

const handleHover = (e, link, logos) => {
  nav.addEventListener(`${e}`, e => {
    if (e.target.classList.contains('nav__link')) {
      if (e.target.classList.contains('nav__link')) {
        const hover = e.target;
        const siblings = hover.closest('.nav').querySelectorAll('.nav__link');
        const logo = hover.closest('.nav').querySelector('img');
        console.log(logo);

        siblings.forEach(el => {
          if (el !== hover) {
            el.style.opacity = link;
          }
          logo.style.opacity = logos;
        });
      }
    }
  });
};

handleHover('mouseover', 0.5, 0.5);
handleHover('mouseout', 1, 1);
