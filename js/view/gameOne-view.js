import AbstractView from "./abstract-view";
import renderChoose from "../components/renderChoose";

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
}
