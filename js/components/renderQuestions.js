import GameOneTemplate from '../view/gameOne-view';
import GameTwoTemplate from '../view/gameTwo-view';
import GameThreeTemplate from '../view/gameThree-view';

let gameScreen;

const renderQuestion = (level) => {
  if (level.type === `TWO_IMG`) {
    gameScreen = new GameOneTemplate(level);
    return gameScreen.template;
  }

  if (level.type === `FIND_PAINT`) {
    gameScreen = new GameTwoTemplate(level);
    return gameScreen.template;
  }

  gameScreen = new GameThreeTemplate(level);
  return gameScreen.template;
};

const getClass = (level) => {
  if (level.type === `TWO_IMG`) {
    return GameOneTemplate;
  }

  if (level.type === `FIND_PAINT`) {
    return GameTwoTemplate;
  }
  return GameThreeTemplate;
};

export default getClass;
