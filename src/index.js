import readlineSync from 'readline-sync';

const gameRepeatCount = 3;

const showMessage = message => console.log(message);
const getAnswer = question => readlineSync.question(question);

const game = (instruction, getGameState) => {
  showMessage('Welcome to the Brain Games!');
  if (instruction !== '') {
    showMessage(`${instruction}\n`);
  }
  const userName = getAnswer('May I have your name? ');
  showMessage(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count === 0) {
      showMessage(`Congratulations, ${userName}!`);
      return;
    }
    const newGameState = getGameState();
    showMessage(`Question: ${newGameState.question}`);
    const answer = getAnswer('Your answer: ');
    if (answer.toLowerCase() === newGameState.correctAnswer) {
      showMessage('Correct!');
      iter(count - 1);
    } else {
      showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${newGameState.correctAnswer}'.`);
      showMessage(`Let's try again, ${userName}!`);
    }
  };
  return iter(gameRepeatCount);
};

export default game;
