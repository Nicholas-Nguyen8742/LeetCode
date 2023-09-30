/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr2.map((el) => arr1.filter((dupe) => dupe === el)).flat(1).concat(arr1.filter((el) => !arr2.includes(el)).sort((a, b) => a - b));
};