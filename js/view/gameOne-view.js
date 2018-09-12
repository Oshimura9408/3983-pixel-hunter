import AbstractView from "./abstract-view";
import renderChoose from "../components/renderChoose";
import {getAnswer} from "../components/getAnswer";

export default class GameOne extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
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

  onAnswer() {
  }

  bind() {
    const form = this.element.querySelector(`form`);
    const gameAnswers = this.element.querySelectorAll(`input`);
    const seeGameTwo = (evt) => {
      if ([...gameAnswers].filter((el) => el.checked).length === 2) {
        getAnswer(evt, this.element);
        this.onAnswer();
      }
    };
    form.addEventListener(`change`, seeGameTwo);
  }
}
