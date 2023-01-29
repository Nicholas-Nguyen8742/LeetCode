/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map();
    nums.map((el) => map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
    let count = 0;
    map.forEach((value, key) => {
        if (map.get(key) > 1) map.delete(key);
        if (map.get(key) === 1) count += key;
    });
    return count;
};