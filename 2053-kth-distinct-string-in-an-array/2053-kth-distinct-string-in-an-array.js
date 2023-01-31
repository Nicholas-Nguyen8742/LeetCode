/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const set = new Set(arr);
    const map = new Map();
    arr.map((el) => map.has(el) ? set.delete(el) : map.set(el, 1));
    return [...set.values()].at(k - 1) || '';
};