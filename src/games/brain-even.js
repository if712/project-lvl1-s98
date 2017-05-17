import readlineSync from 'readline-sync';
import greeting from '../';

const userName = greeting('Answer "yes" if number even otherwise answer "no".');

const game = (counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const randNum = Math.floor(Math.random() * (100 - 1)) + 1;
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    game(counter - 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default game;
