function maxMatrixSum(matrix: number[][]): number {
  let totalSum = 0;
  let minVal = Infinity;
  let negativeCount = 0;
  for (const row of matrix) {
    for (const value of row) {
      totalSum += Math.abs(value);
      if (value < 0) {
        negativeCount += 1;
      }
      
      minVal = Math.min(minVal, Math.abs(value));
     }
  }
  if (negativeCount % 2 !== 0) {
    totalSum -= 2 * minVal;
  }
  return totalSum;
};