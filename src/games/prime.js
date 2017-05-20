import game from '../';
import { getRandomInt, isPrime } from '../math';

const instruction = 'Answer "yes" if number is prime otherwise answer "no".';

const primeGame = () => {
  const randNum = getRandomInt(1, 50);
  const question = `${randNum}`;
  const correctAnswer = isPrime(randNum) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(instruction, primeGame);
