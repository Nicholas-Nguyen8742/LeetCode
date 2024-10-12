/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  let map = {};
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const currCount = map[nums[i]];
    map[nums[i]] = currCount == null ? 1 : currCount + 1;
    max = currCount == null ? Math.max(max, 1) : Math.max(max, currCount + 1);
  }
  
  let multiplier = 0;
  for (const [key, value] of Object.entries(map)) {
    if (value === max) {
      multiplier++;
    }
  }

  return multiplier * max;
};