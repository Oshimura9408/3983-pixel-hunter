import {selectSlide} from "./utils/util.js";
import screenIntro from './templates/welcome';

import updateGame from './components/renderGameScreen.js';
import INITIAL_GAME from './data/game-data';

selectSlide(screenIntro.element);
// debugger;
// selectSlide(updateGame(INITIAL_GAME));
