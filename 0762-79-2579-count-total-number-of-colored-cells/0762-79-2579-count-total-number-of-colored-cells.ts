function coloredCells(n: number, rollingSum = 1):number {
  if (n === 1) {
    return rollingSum;
  }
  
  const currN = n - 1;
  rollingSum = rollingSum + (4 * currN);

  return coloredCells(currN, rollingSum);
};