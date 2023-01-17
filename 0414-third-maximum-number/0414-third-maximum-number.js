/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = [...new Set(nums.sort((a, b) => a - b))];
    return arr[arr.length - 3] || arr.length === 3
        ? arr[arr.length - 3]
        : arr[arr.length - 1];
};