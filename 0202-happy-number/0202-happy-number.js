/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const stringified = `${n}`;
  if (stringified.length === 1) {
    return ['1', '7'].includes(stringified);
  }

  const sum = stringified.split('').reduce((acc, curr) => {
    acc += toSquared(curr);
    return acc;
  }, 0);
  
  return isHappy(sum);
};

var toSquared = function(n) {
  const cleanNum = typeof n === 'string' ? parseInt(n, 10) : n;
  return Math.pow(cleanNum, 2);
};