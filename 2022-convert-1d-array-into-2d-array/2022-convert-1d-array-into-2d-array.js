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

  let currArray = [[]];
  let rowIndex = 0;
  let columnIndex = 0;

  for (let i = 0; i < original.length; i++) {
    if (currArray[rowIndex] === undefined) {
      currArray.push([]);   
    }

    currArray[rowIndex].push(original[i]);
    
    columnIndex++;

    if (currArray[rowIndex].length === n) {
      columnIndex = 0;
      rowIndex++;
    }
  }

  return currArray;
};