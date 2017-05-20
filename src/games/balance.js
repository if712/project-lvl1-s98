import game from '../';
import { getRandomInt } from '../math';

const instruction = 'Balance the given number.';

const getArrayFromNum = num => num.toString().split('').map(n => parseInt(n, 10));
const getNumFromArray = arr => parseInt(arr.join(''), 10);

const getBalancedNum = (newArr) => {
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
  return getBalancedNum(sortedArr);
};

const balanceGame = () => {
  const randNum = getRandomInt(1, 1000);
  const question = `${randNum}`;
  const newArr = getArrayFromNum(randNum);
  const balancedArr = getBalancedNum(newArr);
  const newNum = getNumFromArray(balancedArr);
  const correctAnswer = `${newNum}`;
  return { question, correctAnswer };
};

export default () => game(instruction, balanceGame);
