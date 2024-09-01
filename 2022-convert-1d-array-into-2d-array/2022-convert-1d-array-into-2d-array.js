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

  let currArray = Array.from(Array(m), () => new Array(n).fill(undefined));
  let rowIndex = 0;
  let columnIndex = 0;

  for (let i = 0; i < original.length; i++) {
    currArray[rowIndex][columnIndex] = original[i];
    
    columnIndex++;

    if (!(currArray[rowIndex].includes(undefined))) {
      columnIndex = 0;
      rowIndex++;
    }
  }

  return currArray;
};