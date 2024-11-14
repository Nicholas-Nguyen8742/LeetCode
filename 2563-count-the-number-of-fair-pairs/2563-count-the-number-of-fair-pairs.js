/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  var countPairs = function(target) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] > target) {
        right--;
      } else {
        count += right - left;
        left++;
      }
    }

    return count;
  };
  return countPairs(upper) - countPairs(lower - 1);
};