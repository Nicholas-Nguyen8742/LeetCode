/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {};
    let i = 0;
    let length = nums.length;
    while (i < length) {
        const curr = nums[i];
        if (map[nums[i]] === 2) {
            nums.splice(i, 1);
            length = length - 1;
        } else {
            map[curr] = (map[curr] || 0) + 1;
            i++;
        }
    }
};