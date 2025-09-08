function getNoZeroIntegers(n: number): number[] {
  const target = n - 1;
  for (let i = 1, j = target; i <= target; i++, j--) {
    const stringifiedI = String(i), stringifiedJ = String(j);
    if (stringifiedI.includes('0') || stringifiedJ.includes('0')) {
      continue;
    }

    if (i + j === n) {
      return [i, j];
    }
  }
};