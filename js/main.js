'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainElement = document.querySelector(`#main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

const arrows = document.querySelector(`.arrows__wrap`);
const nextSlide = arrows.querySelector(`.arrows__btn:last-child`);
const prevSlide = arrows.querySelector(`.arrows__btn`);

nextSlide.addEventListener(`click`, () => {
  select(current + 1);
});

prevSlide.addEventListener(`click`, () => {
  select(current - 1);
});

select(0);
