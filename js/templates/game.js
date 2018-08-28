import {render, selectSlide} from "../utils/util";
import renderHeader from '../templates/header';
import renderQuestion from '../templates/renderQuestions';
import INITIAL_GAME from '../data/game-data';
import {questions, changeLevels} from '../data/game-data';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = render();
  const headerElement = render();
  const levelElement = render();

  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);

  const getLevel = () => questions[game.level];

  const updateGame = (state) => {
    headerElement.innerHTML = renderHeader(state);
    levelElement.innerHTML = renderQuestion(getLevel(state.level));
  };

  let gameChoice0 = null;
  let gameChoice1 = null;

  levelElement.addEventListener(`change`, (evt) => {
    let target = evt.target;
    if (target.name === `question1`) {
      gameChoice0 = target.value;

    }
    if (target.name === `question2`) {
      gameChoice1 = target.value;
    }

    if (gameChoice0 && gameChoice1) {
      let nextLevel = 1;
      game = changeLevels(game, nextLevel);
      updateGame(game);
    }
  });

  updateGame(game);
  selectSlide(gameContainerElement);
};

startGame();

export default startGame;
