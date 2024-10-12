/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  let map = {};
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const currCount = map[nums[i]];
    if (currCount == null) {
      map[nums[i]] = 1;
      max = Math.max(max, 1); 
    } else {
      const newValue = currCount + 1;
      map[nums[i]] = newValue;
      max = Math.max(max, newValue);
    }
  }
  
  let multiplier = 0;
  for (const [key, value] of Object.entries(map)) {
    if (value === max) {
      multiplier++;
    }
  }

  return multiplier * max;
};