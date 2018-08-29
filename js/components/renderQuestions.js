import renderChoose from './renderChoose';
import renderSelect from './renderSelect';

const renderQuestion = (level) => {
  if (level.type === `TWO_IMG`) {
    return `
<section class="game">
<p class="game__task">${level.description}</p>
        <form class="game__content">
          ${[...level.options].map(renderChoose).join(``)}
        </form>
        </section>
`;
  }

  if (level.type === `FIND_PAINT`) {
    return `
<section class="game">
<p class="game__task">${level.description}</p>
        <form class="game__content game__content--triple">
          ${[...level.options].map(renderSelect).join(``)}
          </form> 
          </section>`;
  }

  return `
<section class="game">
<p class="game__task">${level.description}</p>
        <form class="game__content game__content--wide">
          ${renderChoose(level.option)}
        </form>
         </section>
`;
};

export default renderQuestion;
