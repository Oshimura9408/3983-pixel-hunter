import {selectSlide, render} from "../utils/util.js";
import gameThree from './game-3.js';
import greeting from './greeting.js';

const template = `
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </section>
`;

const element = render(template);

const gameForm = element.querySelector(`.game__content`);
const options = gameForm.querySelectorAll(`input`);
const maxChoice = 1;

const checkSelect = () => {
  if ([...options].filter((select) => select.checked).length === maxChoice) {
    selectSlide(gameThree);
    gameForm.reset();
  }
};

// const backButton = element.querySelector(`.back`);
//
// const backScreen = () => {
//   selectSlide(greeting);
// };
//
// backButton.addEventListener(`click`, backScreen);

gameForm.addEventListener(`click`, checkSelect);

export default element;