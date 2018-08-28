import {render, selectSlide} from "../utils/util";
import result from './result';
import renderHeader from '../templates/header';
import renderQuestion from '../templates/renderQuestions';
import renderStats from './renderStats';
import INITIAL_GAME from '../data/game-data';
import {questions, changeLevels, nextLevel, countAnswers} from '../data/game-data';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = render();
  const headerElement = render();
  const levelElement = render();
  const statsElement = render();

  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);
  gameContainerElement.appendChild(statsElement);

  const getLevel = () => questions[game.level];

  const updateGame = (state) => {
    headerElement.innerHTML = renderHeader(state);
    levelElement.innerHTML = renderQuestion(getLevel(state.level));
    statsElement.innerHTML = renderStats;
  };
  let testArr = [0];
  levelElement.addEventListener(`click`, () => {
    game = changeLevels(game, nextLevel(game.level));
    updateGame(game);
    testArr.push(1);
    if (countAnswers(testArr) === 1) {
      selectSlide(result);
    }
  });

  updateGame(game);
  selectSlide(gameContainerElement);
};

startGame();

export default startGame;
