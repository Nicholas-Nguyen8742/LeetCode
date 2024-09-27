/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let currCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      count = Math.max(count, currCount);
    } else {
      currCount = 0;
    }
  }

  return count;
};