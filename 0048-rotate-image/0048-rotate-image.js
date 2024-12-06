/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const matrixRef = structuredClone(matrix);
  const LENGTH = matrix.length;
  const indexLength = matrix.length - 1;

  for (let rowIndex = 0; rowIndex < LENGTH; rowIndex++) {
    for (let columnIndex = 0; columnIndex < LENGTH; columnIndex++) {
      const refColumnIndex = Math.abs(indexLength - rowIndex);
      matrix[columnIndex][refColumnIndex] = matrixRef[rowIndex][columnIndex];
    }
  }
};