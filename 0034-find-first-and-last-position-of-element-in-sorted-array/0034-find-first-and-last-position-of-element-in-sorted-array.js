/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return nums.indexOf(target) >= 0 && nums.lastIndexOf(target) >= 0 ? [nums.indexOf(target), nums.lastIndexOf(target)] : [-1, -1];
};