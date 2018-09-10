import AbstractView from "./abstract-view";
import renderChoose from "../components/renderChoose";

export default class GameThree extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
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
}
