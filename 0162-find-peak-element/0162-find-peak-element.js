/**
 * @param {number[]} nums
 * @return {number}
 */

var isMatch = function(el, i, nums) {
    if (i > 0 || i < nums.length - 1) {
       if (nums[i - 1] < el && nums[i + 1] < el) {
           return el;
       }
   }
};

var notMatch = function(nums) {
    return nums[0] >= nums[nums.length - 1] ? 0 : nums.length - 1;
};

var findPeakElement = function(nums) {
    const found = nums.findIndex((el, i) => isMatch(el, i, nums));
    return found === -1 ? (notMatch(nums)) : found;
};