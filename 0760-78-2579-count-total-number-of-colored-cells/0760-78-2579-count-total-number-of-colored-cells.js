/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  if (n === 1) {
    return 1;
  }

  let rollingSum = 1;
  let nthSum = 0;

  for (let i = 2; i <= n; i++) {
    nthSum += 4;
    rollingSum = rollingSum + nthSum;
  }

  return rollingSum;
};