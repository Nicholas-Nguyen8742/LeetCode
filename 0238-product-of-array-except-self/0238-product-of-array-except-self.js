/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = [...nums];
    let i = 0;
    while (i < nums.length) {
        nums[i] = copy.reduce((acc, curr, index) => index !== i ? acc * curr : acc, 1);
        i++;
    }
    return nums;
};