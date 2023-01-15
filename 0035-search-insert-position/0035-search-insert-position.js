/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const found = nums.findIndex((element) => element === target);
    const answer = nums.findIndex((el) => el > target);
    return found === -1 ? (answer === -1 ? nums.length : answer) : found;
};