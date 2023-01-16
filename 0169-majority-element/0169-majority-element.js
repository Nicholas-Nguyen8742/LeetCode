/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    nums.map((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
    const keys = [...map.keys()];
    return keys[[...map.values()].indexOf(Math.max(...map.values()))];
};