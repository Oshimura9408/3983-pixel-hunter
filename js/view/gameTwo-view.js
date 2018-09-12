import AbstractView from "./abstract-view";
import {getAnswer} from "../components/getAnswer";
import renderChoose from "../components/renderChoose";

export default class GameTwo extends AbstractView {
  constructor(level, onAnswer) {
    super();
    this.level = level;
    this.onAnswer = onAnswer;
  }

  get template() {
    return `
<section class="game">
<p class="game__task">${this.level.description}</p>
        <form class="game__content game__content--wide">
          ${renderChoose(this.level.option)}
        </form>
         </section>
`;
  }

  bind(element) {
    const form = element.querySelector(`form`);
    const gameAnswers = element.querySelectorAll(`input`);
    const seeGameWide = (evt) => {
      if ([...gameAnswers].filter((el) => el.checked).length === 1) {
        getAnswer(evt, element);
        this.onAnswer();
      }
    };
    form.addEventListener(`change`, seeGameWide);
  }
}
