import AbstractView from "./abstract-view";
import renderChoose from "../components/renderChoose";
import {getAnswer} from "../components/getAnswer";

export default class GameOne extends AbstractView {
  constructor(level, onAnswer) {
    super();
    this.level = level;
    this.onAnswer = onAnswer;
  }

  get template() {
    return `
<section class="game">
<p class="game__task">${this.level.description}</p>
        <form class="game__content">
          ${[...this.level.options].map(renderChoose).join(``)}
        </form>
        </section>
`;
  }

  bind(element) {
    const form = element.querySelector(`form`);
    const gameAnswers = element.querySelectorAll(`input`);
    const seeGameTwo = (evt) => {
      if ([...gameAnswers].filter((el) => el.checked).length === 2) {
        getAnswer(evt, element);
        this.onAnswer();
      }
    };
    form.addEventListener(`change`, seeGameTwo);
  }
}
