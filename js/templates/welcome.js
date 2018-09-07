import AbstractView from './abstract';
import greeting from "./greeting";
import {selectSlide} from "../utils/util";

class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;
  }

  onClick() {
    selectSlide(greeting.element);
  }

  bind() {
    this.element.querySelector(`.intro__asterisk`).
    addEventListener(`click`, () => {
      this.onClick();
    });
  }
}

const screenIntro = new IntroView();
export default screenIntro;
