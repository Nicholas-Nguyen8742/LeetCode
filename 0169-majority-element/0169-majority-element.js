/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    nums.map((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
    const keys = [...map.keys()];
    const index = [...map.values()].indexOf(Math.max(...map.values()));
    return keys[index];
};