import {render} from "../utils/util.js";
import INITIAL_GAME, {levels} from '../data/game-data';
import headerTemplate from './header';
import renderQuestion from './renderQuestions';
import renderStats from './renderStats';

const template = (state) => `
${headerTemplate(state)}
  <section class="game">
    ${renderQuestion(levels[state.level])}
    ${renderStats}
  </section>
`;

const element = render(template(INITIAL_GAME));

const gameForm = element.querySelector(`.game__content`);
const options = gameForm.querySelectorAll(`input`);
const maxChoice = 2;

const checkSelect = () => {
  if ([...options].filter((select) => select.checked).length === maxChoice) {
  }
};

gameForm.addEventListener(`click`, checkSelect);

export default element;
