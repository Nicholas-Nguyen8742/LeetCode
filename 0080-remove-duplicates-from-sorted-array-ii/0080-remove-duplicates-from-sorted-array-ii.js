/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {}, i = 0, length = nums.length;
    while (i < length) {
        const curr = nums[i];
        const currVal = map[curr] || 0;
        if (!currVal || (map[curr] === 1)) {
            map[curr] = currVal + 1;
            i++;
        } else {
            nums.splice(i, 1);
            length = length - 1;
        }
    }
};