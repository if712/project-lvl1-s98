import readlineSync from 'readline-sync';

const gameRepeatCount = 3;

const game = (instruction, getGameState) => {
  console.log('Welcome to the Brain Games!');
  if (instruction !== '') {
    console.log(`${instruction}\n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!!`);
      return;
    }
    const newGameState = getGameState();
    console.log(`Question: ${newGameState.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === String(newGameState.correctAnswer)) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${newGameState.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  return iter(gameRepeatCount);
};

export default game;
