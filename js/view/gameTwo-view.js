import AbstractView from "./abstract-view";
import renderSelect from "../components/renderSelect";

export default class GameTwo extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
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
}
