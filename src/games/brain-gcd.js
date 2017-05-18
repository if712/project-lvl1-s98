import game from '../';
import { getRandom, getGcd } from '../math';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const randNum1 = getRandom(1, 100);
  const randNum2 = getRandom(1, 100);
  const question = `${randNum1} ${randNum2}`;
  const correctAnswer = getGcd(randNum1, randNum2);
  return { question, correctAnswer };
};

export default () => game(instruction, gcdGame);
