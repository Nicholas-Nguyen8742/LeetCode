/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    nums.map((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
    for (let entry of map) if (entry[1] === 1) return entry[0];
};