/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const matrixRef = structuredClone(matrix);
  const COLUMNS = matrix[0].length;
  const ROWS = matrix.length;

  for (let refColumnIndex = COLUMNS - 1, rowIndex = 0; rowIndex < ROWS; rowIndex++, refColumnIndex--) {
    for (let refRowIndex = 0, columnIndex = 0; columnIndex < COLUMNS; columnIndex++, refRowIndex++) {
      matrix[refRowIndex][refColumnIndex] = matrixRef[rowIndex][columnIndex];
    }
  }
};