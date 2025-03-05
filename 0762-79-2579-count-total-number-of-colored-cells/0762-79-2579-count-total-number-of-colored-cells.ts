function coloredCells(n: number, rollingSum = 1):number {
  if (n === 1) {
    return rollingSum;
  }
  
  const currN = n - 1;
  return coloredCells(currN, rollingSum + (4 * currN));
};