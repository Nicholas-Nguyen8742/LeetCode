/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = [];
    let i = 0;
    do {
        copy[i] = nums.reduce((acc, curr, index) => index !== i ? acc * curr : acc, 1);
        i++;
    } while (i < nums.length);
    return copy;
};