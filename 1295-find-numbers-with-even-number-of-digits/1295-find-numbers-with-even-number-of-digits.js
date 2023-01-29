/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const map = new Map();
    nums.map((el, index) => {
    if (el.toString().split('').length % 2 === 0) map.set(index, 1);
    });
    return map.size;
};