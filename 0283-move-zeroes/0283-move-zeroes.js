/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = [];    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
        nums.splice(i, 1);
        zeros.push(0);
        i--;
        }
    }
    return nums.push(...zeros);
};