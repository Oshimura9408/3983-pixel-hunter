'use strict';
// Коды клавиш
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const sliderContainer = document.querySelector(`#main`);

const selectSlide = (element) => {
  sliderContainer.innerHTML = ``;
  sliderContainer.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let current = 0;
const showSlide = (index) => {
  let sliderNumber = index;
  sliderNumber = sliderNumber < 0 ? screens.length - 1 : sliderNumber;
  sliderNumber = sliderNumber >= screens.length ? 0 : sliderNumber;
  current = sliderNumber;
  selectSlide(screens[current]);
};

const onKeyPress = (evt) => {
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

const onArrowsPress = (evt) => {
  if (evt.target.innerText === `->`) {
    showSlide(current + 1);
  } else if (evt.target.innerText === `<-`) {
    showSlide(current - 1);
  }
};

document.addEventListener(`click`, onArrowsPress);

document.addEventListener(`keydown`, onKeyPress);

showSlide(1);
