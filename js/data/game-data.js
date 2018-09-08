import {selectSlide} from "../utils/util";
import ResultView from '../components/renderResult';
import answersTypes from './answersType';

const INITIAL_GAME = {
  level: 0,
  lives: 3,
  currentQuestion: 0,
  answers: [],
};

export const titleResult = {
  win: `Победа!`,
  lose: `Fail`
};

export const STATE = {
  lives: 3,
  answers: [],
  currentQuestion: 0,
};

export const LEVEL = {
  INITIAL: 0,
  MAX: 10,
  END: -1
};

export const stats = [
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN
];

// export const correct = [
//   [`paint`, `photo`],
//   `photo`
// ];

export const questionTypes = {
  TWO_IMG: `Угадайте для каждого изображения фото или рисунок?`,
  PHOTO_OR_PAINT: `Угадай, фото или рисунок?`,
  FIND_PAINT: `Найдите рисунок среди изображений?`
};

export const questions = [
  {
    type: `TWO_IMG`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ],
    correctAnswers: `photo,photo`
  },
  {
    type: `PHOTO_OR_PAINT`,
    description: questionTypes.PHOTO_OR_PAINT,
    option: {
      name: `question1`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    },
    correctAnswers: `photo`
  },
  {
    type: `FIND_PAINT`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        image: {
          url: `https://k32.kn3.net/5C7060EC5.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 3`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]
  },
  {
    type: `TWO_IMG`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ],
    correctAnswers: `photo,photo`
  },
  {
    type: `PHOTO_OR_PAINT`,
    description: questionTypes.PHOTO_OR_PAINT,
    option: {
      name: `question1`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    },
    correctAnswers: `photo`
  },
  {
    type: `FIND_PAINT`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 3`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]
  },
  {
    type: `TWO_IMG`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ],
    correctAnswers: `photo,photo`
  },
  {
    type: `PHOTO_OR_PAINT`,
    description: questionTypes.PHOTO_OR_PAINT,
    option: {
      name: `question1`,
      image: {
        url: `http://i.imgur.com/DKR1HtB.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    },
    correctAnswers: `photo`
  },
  {
    type: `FIND_PAINT`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        image: {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          title: `Option 3`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]
  },
  {
    type: `PHOTO_OR_PAINT`,
    description: questionTypes.PHOTO_OR_PAINT,
    option: {
      name: `question1`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    },
    correctAnswers: `photo`
  }];

const NORMAL_ANSWER = 2;
const SLOW_ANSWER = 1;
const FAST_ANSWER = 3;
// const WRONG_ANSWER = 0;
//
const POINTS_NORMAL = 100;
const POINTS_SLOW = 50;
const POINTS_FAST = 150;
const POINTS_LIFE = 50;
//
// const WRONG_TIME = 0;
// const SLOW_TIME = 10;
// const NORMAL_TIME = 20;

export const check = (chose, index) => {
  if (chose === questions[index].correctAnswers) {
    return true;
  }
  return false;
};

// export const countAnswers = (answers) => {
//   return answers.length < LEVEL.MAX ? -1 : 1;
// };

export const calculateScore = (answers, live) => {
  if (live < 0) {
    return null;
  }

  const results = answers.reduce((sumPoints, current) => {
    if (current === NORMAL_ANSWER) {
      return sumPoints + POINTS_NORMAL;
    }
    if (current === SLOW_ANSWER) {
      return sumPoints + POINTS_SLOW;
    }
    if (current === FAST_ANSWER) {
      return sumPoints + POINTS_FAST;
    }
    return sumPoints;
  }, 0);

  return results + live * POINTS_LIFE;
};
//
// export const calculateTime = (time) => {
//   if (time <= WRONG_TIME) {
//     return WRONG_ANSWER;
//   }
//
//   if (time < SLOW_TIME) {
//     return SLOW_ANSWER;
//   }
//
//   if (time <= NORMAL_TIME) {
//     return NORMAL_ANSWER;
//   }
//   return FAST_ANSWER;
// };

// export const changeLevel = (countLevel) => {
//   if (countLevel <= INITIAL_GAME.level) {
//     return INITIAL_GAME.level;
//   }
//   return countLevel;
// };

export const calculateLives = (lifeValue, answerType) => {
  const newLifeValue = lifeValue - !answerType;
  if (newLifeValue <= 0) {
    let score = calculateScore(INITIAL_GAME.answers, INITIAL_GAME.lives);
    const resultScreen = new ResultView(titleResult.lose, score, INITIAL_GAME.lives, stats);
    // selectSlide(resultScreen(titleResult.lose, score, INITIAL_GAME.lives, stats));
    selectSlide(resultScreen.element);
  }
  return newLifeValue;
};


export const changeLevels = (countLevel) => {
  if (countLevel >= LEVEL.MAX) {
    return LEVEL.END;
  }

  return countLevel + 1;
};

export default INITIAL_GAME;
