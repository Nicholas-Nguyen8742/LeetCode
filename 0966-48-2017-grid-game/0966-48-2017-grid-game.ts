function gridGame(grid: number[][]): number {
  let firstRowSum = getSum(grid[0]);
  let secondRowSum = 0, minSum = Infinity;

  for (let i = 0; i < grid[0].length; i++) {
    firstRowSum -= grid[0][i];
    minSum = Math.min(minSum, Math.max(firstRowSum, secondRowSum));
    secondRowSum += grid[1][i];
  }

  return minSum;
};

function getSum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}