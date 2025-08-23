function minimumArea(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  let minI = n, maxI = 0, minJ = m, maxJ = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        minI = Math.min(minI, i);
        maxI = Math.max(maxI, i);
        minJ = Math.min(minJ, j);
        maxJ = Math.max(maxJ, j);
      }
    }
  }
  return (maxI - minI + 1) * (maxJ - minJ + 1);
};