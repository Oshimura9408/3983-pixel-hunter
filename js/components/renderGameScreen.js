import {questions} from '../data/game-data';
import {selectSlide} from '../utils/util';
import {calculateLives, calculateScore, titleResult, stats} from '../data/game-data';
import INITIAL_GAME from '../data/game-data';
import GameView from '../view/gameScreen-view';
import Application from '../aplication';
import AbstractView from "../view/abstract-view";

// const updateGame = (stat) => {
//   const gameView = new GameView(stat);
//
//   gameView.onAnswer = () => {
//     if (stat.currentQuestion <= questions.length - 1) {
//       stat.lives = calculateLives(stat.lives, stat.answers[stat.answers.length - 1]);
//
//       if (INITIAL_GAME.lives >= 0) {
//         selectSlide(updateGame(stat));
//       }
//     } else {
//       let score = calculateScore(stat.answers, stat.lives);
//
//       Application.showResult(titleResult.win, score, stat.lives, stats);
//     }
//   };
//
//   return gameView.element;
// };

// export default updateGame;

import GameModel from '../model/model';

export default class Game {
  constructor() {
    this._model = new GameModel();
  }

  get element() {
    return this._screen;
  }

  startGame() {
    this._model.initial();

    this.updateGame();
  }

  updateGame() {
    this._model.nextGame();

    const gameView = new GameView(this._model.stat);
    this._screen = gameView.element;

    gameView.onAnswer = this._answer(this);


  }

  _answer() {
    if (this._model.stat.currentQuestion <= questions.length - 1) {
      this._model.stat.lives = calculateLives(this._model.stat.lives, this._model.stat.answers[this._model.stat.answers.length - 1]);
      if (this._model.stat.lives >= 0) {
        this.updateGame();
      }
    }
    console.log(this._model.stat.question);
  }
}
