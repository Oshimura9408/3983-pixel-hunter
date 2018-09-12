import AbstractView from "./abstract-view";
import {getAnswer} from "../components/getAnswer";
import renderSelect from "../components/renderSelect";

export default class GameThree extends AbstractView {
  constructor(level, onAnswer) {
    super();
    this.level = level;
    this.onAnswer = onAnswer;
  }

  get template() {
    return `
<section class="game">
<p class="game__task">${this.level.description}</p>
        <form class="game__content game__content--triple">
          ${[...this.level.options].map(renderSelect).join(``)}
          </form>
          </section>`;
  }

  bind(element) {
    const form = element.querySelector(`form`);
    const selectPic = (evt) => {
      getAnswer(evt, element);
      this.onAnswer();
    };
    form.addEventListener(`click`, selectPic);
  }
}
