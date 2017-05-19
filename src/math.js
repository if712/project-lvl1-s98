export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

export const getArrayFromNum = num => num.toString().split('').map(n => parseInt(n, 10));

export const getNumFromArray = arr => parseInt(arr.join(''), 10);
