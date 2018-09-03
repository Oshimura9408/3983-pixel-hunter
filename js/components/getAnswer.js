import {stats, check} from '../data/game-data';
import {questionTypes} from '../data/game-data';
import answersTypes from '../data/answersType';
import INITIAL_GAME from "../data/game-data";

export const getAnswer = (evt, element) => {
  const gameTitle = element.querySelector(`.game__task`).innerHTML;
  let gameChoiceAll = null;
  let target;

  switch (gameTitle) {

    case questionTypes.TWO_IMG:
      target = evt.target;
      const labelOptions = element.querySelectorAll(`input:checked`);
      if (check((labelOptions[0].value + `,` + labelOptions[1].value), INITIAL_GAME.currentQuestion)) {
        INITIAL_GAME.answers.push(2);
      } else {
        INITIAL_GAME.answers.push(0);
      }

      break;

    case questionTypes.PHOTO_OR_PAINT:
      target = event.target;
      gameChoiceAll = target.value;
      if (check(gameChoiceAll, INITIAL_GAME.currentQuestion)) {
        INITIAL_GAME.answers.push(2);
      } else {
        INITIAL_GAME.answers.push(0);
      }
      break;

    case questionTypes.FIND_PAINT:
      target = event.target;
      const labelOp = evt.target.closest(`.game__option`);
      if (labelOp.classList.contains(`game__option--selected`)) {
        INITIAL_GAME.answers.push(2);
      } else {
        INITIAL_GAME.answers.push(0);
      }
      break;
  }

  const getTypeAnswer = (state) => {
    switch (state.answers[state.answers.length - 1]) {
      case 0:
        return answersTypes.WRONG;
      case 1:
        return answersTypes.SLOW;
      case 2:
        return answersTypes.CORRECT;
      case 3:
        return answersTypes.FAST;
      default:
        return ``;
    }
  };

  stats[INITIAL_GAME.currentQuestion - 1] = getTypeAnswer(INITIAL_GAME);
};
