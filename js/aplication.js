import {selectSlide} from "./utils/util.js";
import IntroView from './templates/welcome';
import GreetingView from './templates/greeting';
import RulesView from './templates/rules';
import ResultView from './components/renderResult';
import Game from './components/renderGameScreen';

export default class Application {
  static showIntro() {
    const introScreen = new IntroView();
    selectSlide(introScreen.element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingView();
    selectSlide(greetingScreen.element);
  }

  static showRules() {
    const rulesScreen = new RulesView();
    selectSlide(rulesScreen.element);
  }

  static showGame() {
    const gameScreen = new Game();
    gameScreen.startGame();
    selectSlide(gameScreen.element);
  }

  static showResult(title, score, lives, answers) {
    const resultScreen = new ResultView(title, score, lives, answers);
    selectSlide(resultScreen.element);
  }
}
