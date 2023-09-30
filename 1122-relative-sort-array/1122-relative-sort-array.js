/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const filtered = arr1.filter((el) => !arr2.includes(el));
    const filled = arr2.map((el) => arr1.filter((dupe) => dupe === el));
    return [...filled.flat(1), ...filtered.sort((a, b) => a - b)];
};