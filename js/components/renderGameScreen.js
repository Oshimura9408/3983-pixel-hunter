import {questions} from '../data/game-data';
import ResultView from './renderResult';
import {selectSlide} from '../utils/util';
import {calculateLives, calculateScore, titleResult, stats} from '../data/game-data';
import INITIAL_GAME from '../data/game-data';
import GameView from '../view/gameScreen-view';

const updateGame = (stat) => {
  const gameView = new GameView(stat);

  gameView.onAnswer = () => {
    if (stat.currentQuestion <= questions.length - 1) {
      stat.lives = calculateLives(stat.lives, stat.answers[stat.answers.length - 1]);

      if (INITIAL_GAME.lives >= 0) {
        selectSlide(updateGame(stat));
      }
    } else {
      let score = calculateScore(stat.answers, stat.lives);
      const resultScreen = new ResultView(titleResult.win, score, stat.lives, stats);
      selectSlide(resultScreen.element);
    }
  };

  return gameView.element;
};

export default updateGame;
