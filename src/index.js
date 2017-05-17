import readlineSync from 'readline-sync';

const greeting = (instruction = '') => {
  console.log('Welcome to the Brain Games!');
  if (instruction !== '') {
    console.log(`${instruction}\n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default greeting;
