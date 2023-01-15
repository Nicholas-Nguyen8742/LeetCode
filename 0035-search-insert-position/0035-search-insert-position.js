/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let found = nums.findIndex((element) => element === target);
    if (found === (-1)) {
        const answer = nums.findIndex((el) => el > target);
        if (answer === (-1)) return nums.length;
        return answer;
    }
    return found;
};