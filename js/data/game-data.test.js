// import {assert} from 'chai';
//
// import {countAnswers, calculateScore, calculateTime, changeLevel} from './game-data';
//
// const NORMAL_GAME = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const FAST_GAME = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
// const SLOW_GAME = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// const LOSE_GAME = [0, 2, 0, 2, 0, 2, 2, 2];
//
// describe(`Game`, () => {
//   describe(`Result: `, () => {
//     it(`should return count 1150`, () => {
//       assert.equal(calculateScore(NORMAL_GAME, 3), 1150);
//     });
//
//     it(`should return count 1650`, () => {
//       assert.equal(calculateScore(FAST_GAME, 3), 1650);
//     });
//
//     it(`should return count 650`, () => {
//       assert.equal(calculateScore(SLOW_GAME, 3), 650);
//     });
//   });
//
//   describe(`Answer:`, () => {
//     it(`should return -1 if the player answered < 10 questions`, () => {
//       assert.equal(countAnswers(LOSE_GAME), -1);
//     });
//
//     it(`should return 1 if the player answered 10 questions`, () => {
//       assert.equal(countAnswers(NORMAL_GAME), 1);
//     });
//   });
//
//   describe(`Time:`, () => {
//     it(`should return 0 if time is up`, () => {
//       assert.equal(calculateTime(0), 0);
//     });
//
//     it(`should return 1 if timer value is slow`, () => {
//       assert.equal(calculateTime(19), 1);
//     });
//
//     it(`should return 2 if timer value is normal `, () => {
//       assert.equal(calculateTime(8), 2);
//     });
//
//     it(`should return 3 if timer value is fast`, () => {
//       assert.equal(calculateTime(22), 3);
//     });
//   });
//
//   describe(`Check level changer`, () => {
//
//     it(`should update level of the game`, () => {
//       assert.equal(changeLevel(1), 1);
//       assert.equal(changeLevel(2), 2);
//       assert.equal(changeLevel(10), 10);
//     });
//
//     it(`should return 0 if value <= minLevel`, () => {
//       assert.equal(changeLevel(0), 0);
//     });
//   });
// });
