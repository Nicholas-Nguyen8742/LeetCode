/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  let removed = false;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prev) {
      prev = nums[i];
      continue;
    }

    if (removed) {
      return false;
    }
    
    removed = true;
    if (i === 1 || nums[i] > nums[i - 2]) {
      prev = nums[i];
    }
  }

  return true;
};