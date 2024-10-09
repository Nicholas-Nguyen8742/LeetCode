/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const stringified = `${n}`;
  if (stringified.length === 1) {
    return ['1', '7'].includes(stringified);
  }

  return isHappy(stringified.split('').reduce((acc, curr) => {
    acc += toSquared(curr);
    return acc;
  }, 0));
};

var toSquared = function(n) {
  return Math.pow(parseInt(n, 10), 2);
};