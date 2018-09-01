import {questions} from '../data/game-data';
import renderHeader from './header';
import renderQuestion from './renderQuestions';
import renderResult from './renderResult';
import {render} from '../utils/util';
import {questionTypes, changeLevels, calculateLives, calculateScore, titleResult} from '../data/game-data';
import {selectSlide} from '../utils/util';
import INITIAL_GAME from '../data/game-data';
import renderStats from './renderStats';
import greeting from "../templates/greeting";
import {getAnswer} from './getAnswer';

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

  switch (gameTitle) {
    case questionTypes.TWO_IMG:
      const seeGameTwo = (evt) => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          getAnswer(evt, element);
          seeNextSlide();
        }
      };
      form.addEventListener(`change`, seeGameTwo);
      break;

    case questionTypes.PHOTO_OR_PAINT:
      const seeGameWide = (evt) => {
        if ([...gameAnswers].filter((el) => el.checked).length === 1) {
          getAnswer(evt, element);
          seeNextSlide();
        }
      };
      form.addEventListener(`change`, seeGameWide);
      break;

    case questionTypes.FIND_PAINT:
      const selectPic = (evt) => {
        getAnswer(evt, element);
        seeNextSlide();
      };
      form.addEventListener(`click`, selectPic);
      break;

    default:
      return ``;
  }

  const seeNextSlide = () => {
    if (INITIAL_GAME.currentQuestion <= questions.length - 1) {
      INITIAL_GAME.lives = calculateLives(INITIAL_GAME.lives, INITIAL_GAME.answers[INITIAL_GAME.answers.length - 1]);
      if (INITIAL_GAME.lives >= 0) {
        selectSlide(renderGameScreen(INITIAL_GAME));
      }
    } else {
      let score = calculateScore(INITIAL_GAME.answers, INITIAL_GAME.lives);
      selectSlide(render(renderResult(titleResult.win, score, INITIAL_GAME.lives)));
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

  return element;
};

export default renderGameScreen;
