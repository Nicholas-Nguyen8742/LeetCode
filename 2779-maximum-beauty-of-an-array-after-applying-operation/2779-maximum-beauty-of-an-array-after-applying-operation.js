/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  nums.sort((a, b) => a - b);
  let maxBeauty = 0, left = 0;

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - nums[left] > 2 * k) {
      left++;
    }

    maxBeauty = Math.max(maxBeauty, i - left + 1);
  }

  return maxBeauty;
};