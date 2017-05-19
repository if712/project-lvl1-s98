import game from '../';
import { getRandomInt, getArrayFromNum, getNumFromArray } from '../math';

const instruction = 'Balance the given number.';

const getBalance = (newArr) => {
  const sortedArr = newArr.slice().sort();
  if (sortedArr[sortedArr.length - 1] - sortedArr[0] <= 1) {
    return sortedArr;
  }
  const firstElem = sortedArr.shift();
  const lastElem = sortedArr.pop();
  const sum = firstElem + lastElem;
  let newElem1;
  let newElem2;
  if (sum % 2 === 0) {
    newElem1 = sum / 2;
    newElem2 = sum / 2;
  } else {
    newElem1 = (sum - 1) / 2;
    newElem2 = ((sum - 1) / 2) + 1;
  }
  sortedArr.push(newElem1, newElem2);
  return getBalance(sortedArr);
};

const balanceGame = () => {
  const randNum = getRandomInt(1, 1000);
  const question = `${randNum}`;
  const newArr = getArrayFromNum(randNum);
  const balancedArr = getBalance(newArr);
  const newNum = getNumFromArray(balancedArr);
  const correctAnswer = `${newNum}`;
  return { question, correctAnswer };
};

export default () => game(instruction, balanceGame);
