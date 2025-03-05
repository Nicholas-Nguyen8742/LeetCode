/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  let rollingSum = 1, nthSum = 0;
  if (n === 1) {
    return rollingSum;
  }

  for (let i = 2; i <= n; i++) {
    nthSum += 4;
    rollingSum = rollingSum + nthSum;
  }

  return rollingSum;
};