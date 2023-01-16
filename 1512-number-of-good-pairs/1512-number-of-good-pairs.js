/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = new Map();
    nums.map((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
    let count = 0;
    for (let entry of map) count += ((entry[1] - 1) * (entry[1])) / 2;
    return count;
};