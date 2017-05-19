import game from '../';
import { getRandomInt } from '../math';

const instruction = 'What number is missing in this progression?';

const getProgression = (firstNum, step, missingNumKey) => {
  const seq = [firstNum];
  for (let i = 0; i < 10; i += 1) {
    seq.push(seq[seq.length - 1] + step);
  }
  const missingNumValue = seq[missingNumKey];
  seq[missingNumKey] = '..';
  const progression = seq.slice();
  return { progression, missingNumValue };
};

const progressionGame = () => {
  const firstNum = getRandomInt(1, 50);
  const step = getRandomInt(1, 30);
  const missingNumKey = getRandomInt(0, 9);
  const progressionState = getProgression(firstNum, step, missingNumKey);
  const question = `${progressionState.progression}`;
  const correctAnswer = `${progressionState.missingNumValue}`;
  return { question, correctAnswer };
};

export default () => game(instruction, progressionGame);
