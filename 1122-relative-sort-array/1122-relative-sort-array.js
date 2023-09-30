/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = new Map();
    const filtered = [];
    arr1.forEach((el) => arr2.includes(el) ? (map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1)) : (filtered.push(el)));
    const filled = arr2.map((el) => { if (map.has(el)) return Array(map.get(el)).fill(el) });
    return [...filled.flat(1), ...filtered.sort((a, b) => a - b)];
};