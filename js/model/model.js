import {questions} from '../data/game-data';
import INITIAL_GAME from '../data/game-data';

export default class GameModel {
  get stat() {
    return this._stat;
  }

  initial() {
    this._stat = Object.assign({}, INITIAL_GAME);
  }

  nextGame() {
    this._stat = Object.assign({}, this._stat, {
      question: questions[this._stat.currentQuestion + 1]
    });
  }
}
