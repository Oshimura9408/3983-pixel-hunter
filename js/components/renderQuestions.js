import GameOneTemplate from '../view/gameOne-view';
import GameTwoTemplate from '../view/gameTwo-view';
import GameThreeTemplate from '../view/gameThree-view';

const getClass = (level) => {
  if (level.type === `TWO_IMG`) {
    return GameOneTemplate;
  }

  if (level.type === `PHOTO_OR_PAINT`) {
    return GameTwoTemplate;
  }
  return GameThreeTemplate;
};

export default getClass;
