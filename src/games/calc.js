import game from '../';
import { getRandomInt } from '../math';

const instruction = 'What is the result of the expression?';

const calcGame = () => {
  const randNum1 = getRandomInt(1, 10);
  const randNum2 = getRandomInt(1, 10);
  let question;
  let correctAnswer;
  switch (getRandomInt(1, 3)) {
    case 1:
      question = `${randNum1} + ${randNum2}`;
      correctAnswer = String(randNum1 + randNum2);
      break;
    case 2:
      question = `${randNum1} - ${randNum2}`;
      correctAnswer = String(randNum1 - randNum2);
      break;
    case 3:
      question = `${randNum1} * ${randNum2}`;
      correctAnswer = String(randNum1 * randNum2);
      break;
    default:
      question = `${randNum1} * ${randNum2}`;
      correctAnswer = String(randNum1 * randNum2);
      break;
  }
  return { question, correctAnswer };
};

export default () => game(instruction, calcGame);
