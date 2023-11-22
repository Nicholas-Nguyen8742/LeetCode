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
        if (!map[curr]) {
            map[curr] = 1;
            i++;
        } else if (map[curr] === 1) {
            map[curr] = 2;
            i++;
        } else if (map[curr] === 2) {
            nums.splice(i, 1);
            length = length - 1;
        }
    }
};