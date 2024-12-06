/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const matrixRef = structuredClone(matrix);
  const LENGTH = matrix.length;

  for (let rowIndex = 0; rowIndex < LENGTH; rowIndex++) {
    for (let columnIndex = 0; columnIndex < LENGTH; columnIndex++) {
      const refColumnIndex = Math.abs(LENGTH - 1 - rowIndex);
      matrix[columnIndex][refColumnIndex] = matrixRef[rowIndex][columnIndex];
    }
  }
};