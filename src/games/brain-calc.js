import game from '../';
import getRandom from '../random';

const instruction = 'What is the result of the expression?';

const calcGame = () => {
  const randNum1 = getRandom(1, 10);
  const randNum2 = getRandom(1, 10);
  let question;
  let correctAnswer;
  switch (getRandom(1, 3)) {
    case 1:
      question = `${randNum1} + ${randNum2}`;
      correctAnswer = randNum1 + randNum2;
      break;
    case 2:
      question = `${randNum1} - ${randNum2}`;
      correctAnswer = randNum1 - randNum2;
      break;
    case 3:
      question = `${randNum1} * ${randNum2}`;
      correctAnswer = randNum1 * randNum2;
      break;
    default:
      console.log('error');
      break;
  }
  return { question, correctAnswer };
};

export default () => game(instruction, calcGame);
