import game from '../';
import { getRandomInt, getGcd } from '../math';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const randNum1 = getRandomInt(1, 100);
  const randNum2 = getRandomInt(1, 100);
  const question = `${randNum1} ${randNum2}`;
  const correctAnswer = String(getGcd(randNum1, randNum2));
  return { question, correctAnswer };
};

export default () => game(instruction, gcdGame);
