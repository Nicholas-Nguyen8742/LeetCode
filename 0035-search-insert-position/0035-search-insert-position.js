/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const found = nums.findIndex((element) => element === target);
    if (found !== -1) return found;
    const answer = nums.findIndex((el) => el > target);
    if (answer !== -1) return answer;
    return nums.length;
};