/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;
    let result = []; 
    arr.forEach((el) => Array.isArray(el) ? result.push(...flat(el, n - 1)) : result.push(el));
    return result;
};