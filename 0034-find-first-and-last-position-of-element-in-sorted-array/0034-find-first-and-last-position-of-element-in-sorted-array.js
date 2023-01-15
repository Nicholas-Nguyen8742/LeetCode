/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = nums.indexOf(target);
    let end = nums.lastIndexOf(target);
    return start >= 0 && end >= 0 ? [start, end] : [-1, -1];
};