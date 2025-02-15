/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  for (let i = 1; i <= num; i++) {
    const squaredNum = i * i;
    if (squaredNum === num) {
      return true;
    }

    if (squaredNum > num) {
      return false;
    }
  }

  return false;
};