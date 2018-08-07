'use strict';
// Коды клавиш
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const sliderContainer = document.querySelector(`#main`);

const selectSlide = (element) => {
  while (sliderContainer.firstChild) {
    sliderContainer.removeChild(sliderContainer.firstChild);
  }
  sliderContainer.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let current = 0;
const showSlide = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

// Функция переключения слайдов клавишами
const keyPress = (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      showSlide(current + 1);
      break;
    case LEFT_ARROW:
      showSlide(current - 1);
      break;
  }
};

// Добавляем визуальные стрелки
document.querySelector(`body`).insertAdjacentHTML(`beforeEnd`, `
<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
      z-index: 10;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>
`);

// элементы управления
const arrows = document.querySelector(`.arrows__wrap`);
const nextSlide = arrows.querySelector(`.arrows__btn:last-child`);
const prevSlide = arrows.querySelector(`.arrows__btn`);

document.addEventListener(`keydown`, keyPress);

nextSlide.addEventListener(`click`, () => {
  showSlide(current + 1);
});

prevSlide.addEventListener(`click`, () => {
  showSlide(current - 1);
});

showSlide(1);
