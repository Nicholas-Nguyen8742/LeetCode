/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if ((m * n) !== original.length) {
    return [];
  }

  let currArray = Array.from(Array(m), () => []);
  let rowIndex = 0;
  let columnIndex = 0;

  for (let i = 0; i < original.length; i++) {
    currArray[rowIndex].push(original[i]);

    if (currArray[rowIndex].length === n) {
      columnIndex = 0;
      rowIndex++;
    } else {
      columnIndex++;
    }
  }

  return currArray;
};