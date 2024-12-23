/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;
  
  const flattenedGrid = grid.flat();
  
  k = k % total;
  
  const shifted = flattenedGrid
    .slice(-k)
    .concat(flattenedGrid.slice(0, -k));
  
  const result = [];
  
  for (let i = 0; i < m; i++) {
    result.push(shifted.slice(i * n, (i + 1) * n));
  }
  
  return result;
};