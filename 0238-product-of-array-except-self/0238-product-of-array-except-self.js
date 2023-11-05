/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = [];
    for (const element of nums) {
        copy.push(nums.reduce((acc, curr, index) => copy.length !== index ? acc * curr : acc, 1));
    }
    return copy;
};