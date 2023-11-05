/**
 * @param {number[]} nums
 * @return {number[]}
 */
var product = function(nums, i) {
    return nums.reduce((acc, curr, index) => i === index ? acc : acc * curr, 1);
}

var productExceptSelf = function(nums) {
    const copy = [];
    for (const element of nums) {
        const i = copy.length;
        copy[i] = product(nums, i);
    }
    return copy;
};