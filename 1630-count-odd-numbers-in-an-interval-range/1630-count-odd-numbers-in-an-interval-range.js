/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  return low & 1 ? Math.floor((high - low + 2) / 2) : Math.floor((high - low + 1) / 2);
};