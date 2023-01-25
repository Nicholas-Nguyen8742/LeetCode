/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    arr.map((element) => map.has(element) ? map.set(element, map.get(element) + 1) : map.set(element, 1));
    const values = Object.values(Object.fromEntries(map));
    let set = new Set(values);
    return values.length === set.size ? true : false;
};