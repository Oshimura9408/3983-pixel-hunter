import {questions} from '../data/game-data';
import renderHeader from './header';
import renderQuestion from './renderQuestions';
import {render} from '../utils/util';
import {questionTypes, changeLevels, check, calculateLives} from '../data/game-data';
import {selectSlide} from '../utils/util';
import INITIAL_GAME from '../data/game-data';
import result from '../templates/result';
import renderStats from './renderStats';
import greeting from "../templates/greeting";

const renderGameScreen = (state) => {
  const {lives, currentQuestion} = state;
  const question = questions[currentQuestion];

  INITIAL_GAME.currentQuestion = changeLevels(INITIAL_GAME.currentQuestion);

  const template = `
  ${renderHeader(lives)}
    ${renderQuestion(question)}
    ${renderStats}
  `;

  const element = render(template);

  const gameTitle = element.querySelector(`.game__task`).innerHTML;
  const form = element.querySelector(`form`);
  const gameAnswers = element.querySelectorAll(`input`);

  const testArr = INITIAL_GAME.test;

  switch (gameTitle) {
    case questionTypes.TWO_IMG:
      let gameChoiceAll = null;
      let gameChoice0 = null;
      let gameChoice1 = null;
      form.addEventListener(`change`, (evt) => {
        let target = evt.target;
        if (target.name === `question1`) {
          gameChoice0 = target.value;
        }
        if (target.name === `question2`) {
          gameChoice1 = target.value;
        }
        if (gameChoice0 && gameChoice1) {
          gameChoiceAll = gameChoice0 + `,` + gameChoice1;
          if (check(gameChoiceAll, INITIAL_GAME.currentQuestion)) {
            testArr.push(1);
            seeNextSlide();
          } else {
            testArr.push(0);
            seeNextSlide();
          }
        }
      });
      break;
    case questionTypes.PHOTO_OR_PAINT:
      for (let i = 0; i < gameAnswers.length; i++) {
        gameAnswers[i].addEventListener(`click`, () => {
          testArr.push(2);
          seeNextSlide();
        });
      }
      break;
    case questionTypes.FIND_PAINT:
      const selectPic = () => {
        testArr.push(3);
        seeNextSlide();
      };
      form.addEventListener(`click`, selectPic);
      break;
    default:
      return ``;
  }

  const seeNextSlide = () => {
    if (INITIAL_GAME.currentQuestion <= questions.length - 1) {
      selectSlide(renderGameScreen(INITIAL_GAME));
    } else {
      selectSlide(result);
    }
    resetGame();
  };

  const resetGame = () => {
    form.reset();
  };

  const backButton = element.querySelector(`.back`);
  const backScreen = () => {
    selectSlide(greeting);
  };
  backButton.addEventListener(`click`, backScreen);

  INITIAL_GAME.lives = calculateLives(INITIAL_GAME.lives, INITIAL_GAME.test[INITIAL_GAME.test.length - 1]);

  return element;
};

export default renderGameScreen;
