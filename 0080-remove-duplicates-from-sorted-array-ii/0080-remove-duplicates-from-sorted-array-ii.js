/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {}, i = 0, length = nums.length;
    while (i < length) {
        const curr = nums[i];
        const currVal = map[curr] || 0;
        if (currVal === 2) {
            nums.splice(i, 1);
            length = length - 1;
        } else {
            map[curr] = currVal + 1;
            i++;
        }
    }
};