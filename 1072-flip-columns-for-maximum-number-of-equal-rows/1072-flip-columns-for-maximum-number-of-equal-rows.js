/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const patternFrequency = new Map();

  for (const row of matrix) {
    const pattern = row
      .map((num) => num === row[0] ? 'T' : 'F')
      .join('');

    patternFrequency.set(pattern, (patternFrequency.get(pattern) || 0) + 1);
  }

  return Math.max(...patternFrequency.values());
};