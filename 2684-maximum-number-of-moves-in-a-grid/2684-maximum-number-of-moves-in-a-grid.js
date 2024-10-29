/**
 * @param {number[][]} grid
 * @return {number}
 */
var dirs = [-1, 0, 1];

var maxMoves = function(grid) {
  const M = grid.length, N = grid[0].length;

  const dp = Array.from({ length: M }, () => Array(N).fill(-1));

  let maxMoves = 0;
  for (let i = 0; i < M; i++) {
    const movesRequired = dfs(i, 0, grid, dp);
    maxMoves = Math.max(maxMoves, movesRequired);
  }

  return maxMoves;
};

function dfs(row, col, grid, dp) {
  const M = grid.length, N = grid[0].length;

  if (dp[row][col] !== -1) {
    return dp[row][col];
  }

  let maxMoves = 0;
  for (const dir of dirs) {
    const newRow = row + dir;
    const newCol = col + 1;

    if (
        newRow >= 0 && newRow < M &&
        newCol >= 0 && newCol < N &&
        grid[row][col] < grid[newRow][newCol]
    ) {
      maxMoves = Math.max(
        maxMoves, 1 + dfs(newRow, newCol, grid, dp)
      );
    }
  }

  dp[row][col] = maxMoves;
  return maxMoves;
}