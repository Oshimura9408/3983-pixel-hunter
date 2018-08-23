export const INITIAL_GAME = {
  level: 0,
  lives: 3,
  points: 0,
  answers: [],
  time: 0
};

const COUNT_ANSWERS = 10;
const NORMAL_ANSWER = 1;
const SLOW_ANSWER = 2;
const FAST_ANSWER = 3;
const WRONG_ANSWER = 0;

const WRONG_TIME = 0;
const SLOW_TIME = 10;
const NORMAL_TIME = 20;

// let currentLevel = INITIAL_GAME.level;

export const countAnswers = (answers) => {
  if (answers.length < COUNT_ANSWERS) {
    return -1;
  }
  return 1;
};

export const calculateScore = (answers, live) => {
  if (live < 0) {
    return null;
  }

  const result = answers.reduce((sumPoints, current) => {
    if (current === NORMAL_ANSWER) {
      sumPoints = sumPoints + 100;
    } else if (current === SLOW_ANSWER) {
      sumPoints = sumPoints + 50;
    } else if (current === FAST_ANSWER) {
      sumPoints = sumPoints + 150;
    }
    return sumPoints;
  }, 0);

  return result + live * 50;
};

export const calculateTime = (time) => {
  if (time <= WRONG_TIME) {
    return WRONG_ANSWER;
  }

  if (time < SLOW_TIME) {
    return SLOW_ANSWER;
  }

  if (time <= NORMAL_TIME) {
    return NORMAL_ANSWER;
  }
  return FAST_ANSWER;
};

export const changeLevel = (countLevel) => {
  if (countLevel <= INITIAL_GAME.level) {
    return INITIAL_GAME.level;
  }
  return countLevel;
};
