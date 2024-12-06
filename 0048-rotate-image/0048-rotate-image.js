/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const matrixRef = structuredClone(matrix);
  const LENGTH = matrix.length;

  for (let refColumnIndex = matrix[0].length - 1, rowIndex = 0; rowIndex < LENGTH; rowIndex++, refColumnIndex--) {
    for (let refRowIndex = 0, columnIndex = 0; columnIndex < LENGTH; columnIndex++, refRowIndex++) {
      matrix[refRowIndex][refColumnIndex] = matrixRef[rowIndex][columnIndex];
    }
  }
};