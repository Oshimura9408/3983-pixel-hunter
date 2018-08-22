import {assert} from 'chai';

import {countAnswers} from './game-data';

const NORMAL_GAME = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const FAST_GAME = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
const SLOW_GAME = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const LOSE_GAME = [0, 2, 0, 2, 0, 2, 2, 2, 2, 2];

describe(`Game`, () => {
  describe(`Answers`, () => {
    it(`should return -1 If the player answered < 10 questions`, () => {
      assert.equal(countAnswers([1, 3, 2], 0), -1);
    });

    it(`should return count 1150`, () => {
      assert.equal(countAnswers(NORMAL_GAME, 3), 1150);
    });

    it(`should return count 1650`, () => {
      assert.equal(countAnswers(FAST_GAME, 3), 1650);
    });

    it(`should return count 650`, () => {
      assert.equal(countAnswers(SLOW_GAME, 3), 650);
    });

    it(`should return 0 if the player spent all lives`, () => {
      assert.equal(countAnswers(LOSE_GAME, 0), 0);
    });
  });
});
