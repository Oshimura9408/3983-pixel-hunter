import GameOneTemplate from '../view/gameOne-view';
import GameTwoTemplate from '../view/gameTwo-view';
import GameThreeTemplate from '../view/gameThree-view';

const renderQuestion = (level) => {
  if (level.type === `TWO_IMG`) {
    const gameOneScreen = new GameOneTemplate(level);
    return gameOneScreen.template;
  }

  if (level.type === `FIND_PAINT`) {
    const gameTwoScreen = new GameTwoTemplate(level);
    return gameTwoScreen.template;
  }

  const gameThreeScreen = new GameThreeTemplate(level);
  return gameThreeScreen.template;
};

export default renderQuestion;
