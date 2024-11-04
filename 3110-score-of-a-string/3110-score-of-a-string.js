/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let sum = 0;
  let stopCondition = s.length - 1;

  for (let i = 0; i < stopCondition; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
};