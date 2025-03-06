/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const result = [];
  const set = createNumberSet(grid.length ** 2);

  const flatGrid = grid.flat();
  for (let i = 0; i < flatGrid.length; i++) {
    const curr = flatGrid[i];
    const hasCurr = set.has(curr);
    if (hasCurr) {
      set.delete(curr)
    } else {
      result.push(curr);
    }
  }

  return result.concat([...set]);
};

function createNumberSet(n) {
  const numberSet = new Set();
  for (let i = 1; i <= n; i++) {
    numberSet.add(i);
  }
  return numberSet;
}