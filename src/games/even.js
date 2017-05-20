import game from '../';
import { getRandomInt } from '../math';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const randNum = getRandomInt(1, 100);
  const question = randNum;
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(instruction, evenGame);
