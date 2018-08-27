// import {selectSlide, render} from "../utils/util.js";
// import gameTwo from './game-2.js';
// import greeting from './greeting.js';
// import INITIAL_GAME, {levels} from '../data/game-data';
// import headerTemplate from './header';
// import renderQu from './renderQuestions';
//
// const template = `
// ${headerTemplate(INITIAL_GAME)}
//   <section class="game">
//     ${renderQu(levels)}
//     <ul class="stats">
//       <li class="stats__result stats__result--wrong"></li>
//       <li class="stats__result stats__result--slow"></li>
//       <li class="stats__result stats__result--fast"></li>
//       <li class="stats__result stats__result--correct"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--unknown"></li>
//       <li class="stats__result stats__result--unknown"></li>
//     </ul>
//   </section>
// `;
//
// const element = render(template);
//
// const gameForm = element.querySelector(`.game__content`);
// const options = gameForm.querySelectorAll(`input`);
// const maxChoice = 2;
//
// const checkSelect = () => {
//   if ([...options].filter((select) => select.checked).length === maxChoice) {
//     selectSlide(gameTwo);
//     gameForm.reset();
//   }
// };
//
// const backButton = element.querySelector(`.back`);
//
// const backScreen = () => {
//   selectSlide(greeting);
// };
//
// backButton.addEventListener(`click`, backScreen);
//
// gameForm.addEventListener(`click`, checkSelect);
//
// export default element;
