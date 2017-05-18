export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);
