import game from '../';
import getRandom from '../random';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const randNum = getRandom(1, 100);
  const question = randNum;
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(instruction, evenGame);
