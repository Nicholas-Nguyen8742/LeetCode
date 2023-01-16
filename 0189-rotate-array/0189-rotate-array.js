/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    if (k !== 0) { 
        const tmp = nums.slice(-k);
        nums.splice(-k, k);
        Array.prototype.unshift.apply(nums, tmp);
    }
};