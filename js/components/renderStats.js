import answerType from '../data/answersType';

const renderStats = (answers) => `
<section class="game">
<ul class="stats">
      ${answers.map((answer) => `<li class="stats__result stats__result--${answer || answerType.UNKNOWN}"></li>`).join(``)}
</ul>
`;

export default renderStats;
