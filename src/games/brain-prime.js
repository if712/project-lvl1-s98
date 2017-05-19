import game from '../';
import { getRandomInt } from '../math';

const instruction = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (num % divisor === 0) {
      return false;
    }
    return divisor < num / 2 ? iter(divisor + 1) : true;
  };
  return iter(2);
};

const primeGame = () => {
  const randNum = getRandomInt(1, 50);
  const question = `${randNum}`;
  const correctAnswer = isPrime(randNum) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(instruction, primeGame);
