import AbstractView from './abstract-view';
import {questions, stats} from "../data/game-data";
import renderQuestion from "../components/renderQuestions";
import renderHeader from "../components/header";
import renderStats from "../components/renderStats";

export default class GameView extends AbstractView {
  constructor(stat) {
    super();
    this.stat = stat;
  }

  get template() {
    const {lives, currentQuestion} = this.stat;
    const question = questions[currentQuestion];

    const GameClass = renderQuestion(question);
    this.gameScreen = new GameClass(question, this.onAnswer);

    return `
    ${renderHeader(lives)}
    ${this.gameScreen.template}
    ${renderStats(stats)}
    `;
  }

  bind() {
    this.gameScreen.bind(this.element);
  }

  onAnswer() {

  }
}
