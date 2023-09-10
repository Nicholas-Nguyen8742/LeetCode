/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();
    [...arr1, ...arr2].forEach((el) => map.has(el.id) ? map.set(el.id, { ...map.get(el.id), ...el }) : map.set(el.id, el));
    return [...map.values()].sort((a, b) => a.id - b.id);
};