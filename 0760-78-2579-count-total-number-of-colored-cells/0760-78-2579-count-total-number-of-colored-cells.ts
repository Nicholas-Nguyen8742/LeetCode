function coloredCells(n: number): number {
  let rollingSum = 1;
  if (n === 1) {
    return rollingSum;
  }

  for (let i = 2; i <= n; i++) {
    rollingSum = rollingSum + (4 * (i - 1));
  }

  return rollingSum;
};