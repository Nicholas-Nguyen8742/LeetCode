function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  const UNGUARDED = 0;
  const GUARDED = 1;
  const GUARD = 2;
  const WALL = 3;

  const grid = Array.from({ length: m }, () => Array(n).fill(UNGUARDED));
  
  for (const [row, column] of guards) {
    grid[row][column] = GUARD;
  }
  
  for (const [row, column] of walls) {
    grid[row][column] = WALL;
  }
  
  function updateCellVisibility(row, col, isGuardLineActive) {
    if (grid[row][col] === GUARD) {
      return true;
    }

    if (grid[row][col] === WALL) {
      return false;
    }

    if (isGuardLineActive) {
      grid[row][col] = GUARDED;
    }

    return isGuardLineActive;
  };
  
  for (let row = 0; row < m; row++) {
    let isGuardLineActive = grid[row][0] === GUARD;
    for (let col = 1; col < n; col++) {
      isGuardLineActive = updateCellVisibility(row, col, isGuardLineActive);
    }
    isGuardLineActive = grid[row][n - 1] === GUARD;
    for (let col = n - 2; col >= 0; col--) {
      isGuardLineActive = updateCellVisibility(row, col, isGuardLineActive);
    }
  }
  
  for (let col = 0; col < n; col++) {
    let isGuardLineActive = grid[0][col] === GUARD;
    for (let row = 1; row < m; row++) {
      isGuardLineActive = updateCellVisibility(row, col, isGuardLineActive);
    }
    isGuardLineActive = grid[m - 1][col] === GUARD;
    for (let row = m - 2; row >= 0; row--) {
      isGuardLineActive = updateCellVisibility(row, col, isGuardLineActive);
    }
  }

  let count = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === UNGUARDED) {
        count++;
      }
    }
  }

  return count;
};