/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var isMatch = function(el, target) {
    return el === target;
}

var search = function(nums, target) {
    return nums.findIndex((el) => isMatch(el, target));
};