/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const pascal = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i).fill(1);
    row[0] = 1;

    const prevRow = pascal[i - 1];
  
    for (let j = 1; j < i; j++) {
      row[j] = (prevRow[j - 1]) + (prevRow[j]);
    }

    row[i] = 1;
    pascal.push(row);
  }

  return pascal;
};