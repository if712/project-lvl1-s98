export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (num % divisor === 0 && num !== divisor) {
      return false;
    }
    return divisor < num / 2 ? iter(divisor + 1) : true;
  };
  return iter(2);
};
