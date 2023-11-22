/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const found = nums.findIndex((el, i) => {
       if (i > 0 || i < nums.length - 1) {
           if (nums[i - 1] < el && nums[i + 1] < el) {
               return el;
           }
       }
    });
    return found === -1 ? (nums[0] >= nums[nums.length -1] ? 0 : nums.length - 1) : found;
};