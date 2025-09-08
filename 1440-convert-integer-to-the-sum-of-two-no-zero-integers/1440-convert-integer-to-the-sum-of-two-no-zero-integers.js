/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  const target = n - 1;
  for (let i = 1, j = target; i <= target; i++, j--) {
    const stringifiedI = `${i}`, stringifiedJ = `${j}`;
    if (stringifiedI.includes(0) || stringifiedJ.includes(0)) {
      continue;
    }

    if (i + j === n) {
      return [i, j];
    }
  }
};