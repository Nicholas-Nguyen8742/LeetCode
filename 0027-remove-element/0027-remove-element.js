/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 // Sort Array of nums
 // use indexOf & lastIndexOf to find how many to splice

var removeElement = function(nums, val) {
    nums.sort((a, b) => a - b);
    const initial = nums.indexOf(val);
    const last = nums.lastIndexOf(val);
    if (initial >= 0 && last >= 0) {
        nums.splice(initial, ((last - initial) + 1));
    } else if (initial >= 0 && initial === last) {
        nums.splice(initial, 1);
    }
};