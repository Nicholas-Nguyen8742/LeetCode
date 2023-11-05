/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = [];
    for (const element of nums) {
        copy[copy.length] = nums.reduce((acc, curr, index) => copy.length === index ? acc : acc * curr, 1);
    }
    return copy;
};