export const INITIAL_GAME = {
  level: 0,
  lives: 3,
  points: 0,
  answers: [],
  time: 0
};

const COUNT_ANSWERS = 10;
const WRONG_ANSWER = 0;
const NORMAL_ANSWER = 1;
const SLOW_ANSWER = 2;
const FAST_ANSWER = 3;

// let currentLevel = INITIAL_GAME.level;

export const countAnswers = (answers, live) => {
  // let currentAnswers = answers;
  let countCorrectAnswers = 0;
  let wrong = 0;
  let normal = 0;
  let fast = 0;
  let slow = 0;
  let score = 0;
  let lives = live;

  if (answers.length < COUNT_ANSWERS) {
    // currentAnswers = -1;
    return -1;
  } else {
    for (let i = 0; i < answers.length; i++) {

      if (answers[i] === NORMAL_ANSWER) {
        normal = normal + 1;
        score = score + 100;
        countCorrectAnswers = countCorrectAnswers + 1;
      } else if (answers[i] === SLOW_ANSWER) {
        slow = slow + 1;
        score = score + 50;
        countCorrectAnswers = countCorrectAnswers + 1;
      } else if (answers[i] === FAST_ANSWER) {
        fast = fast + 1;
        score = score + 150;
        countCorrectAnswers = countCorrectAnswers + 1;
      } else if (answers[i] === WRONG_ANSWER) {
        wrong = wrong + 1;
        lives = lives - 1;
      } if (wrong === 3) {
        break;
      }

    }
    if (countCorrectAnswers > 7) {
      score = score + lives * 50;
      return score;
    }
    return 0;
  }
};
