import answerType from '../data/answersType';

const resultTemplate = (title, score, lives, answers) => `
<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">${title}</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
                  ${answers.map((answer) => `<li class="stats__result stats__result--${answer || answerType.UNKNOWN}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${score - 50 * lives}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${lives} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${50 * lives}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${score}</td>
      </tr>
    </table>
  `;

export default resultTemplate;
