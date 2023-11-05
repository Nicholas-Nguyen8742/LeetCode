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
        copy.push(product(nums, copy.length));
    }
    return copy;
};