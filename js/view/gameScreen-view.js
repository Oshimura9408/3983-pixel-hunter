import AbstractView from './abstract-view';
import {questions, questionTypes, stats} from "../data/game-data";
import renderQuestion from "../components/renderQuestions";
import renderHeader from "../components/header";
import renderStats from "../components/renderStats";
import {getAnswer} from "../components/getAnswer";

export default class GameView extends AbstractView {
  constructor(stat) {
    super();
    this.stat = stat;
  }

  get template() {
    const {lives, currentQuestion} = this.stat;
    const question = questions[currentQuestion];

    return `
    ${renderHeader(lives)}
    ${renderQuestion(question)}
    ${renderStats(stats)}
    `;
  }

  bind() {
    const gameTitle = this.element.querySelector(`.game__task`).innerHTML;
    const form = this.element.querySelector(`form`);
    const gameAnswers = this.element.querySelectorAll(`input`);

    switch (gameTitle) {
      case questionTypes.TWO_IMG:
        const seeGameTwo = (evt) => {
          if ([...gameAnswers].filter((el) => el.checked).length === 2) {
            getAnswer(evt, this.element);
            this.onAnswer();
          }
        };
        form.addEventListener(`change`, seeGameTwo);
        break;

      case questionTypes.PHOTO_OR_PAINT:
        const seeGameWide = (evt) => {
          if ([...gameAnswers].filter((el) => el.checked).length === 1) {
            getAnswer(evt, this.element);
            this.onAnswer();
          }
        };
        form.addEventListener(`change`, seeGameWide);
        break;

      case questionTypes.FIND_PAINT:
        const selectPic = (evt) => {
          getAnswer(evt, this.element);
          this.onAnswer();
        };
        form.addEventListener(`click`, selectPic);
        break;
    }
  }

  onAnswer() {

  }
}
