/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  let max = 0;
  
  for (let i = 0; i < 24; i++) {
    let currCount = 0;
    for (const num of candidates) {
      if (num & (1 << i)) {
        currCount += 1;
      }
    }
    max = Math.max(max, currCount);
  }

  return max;
};