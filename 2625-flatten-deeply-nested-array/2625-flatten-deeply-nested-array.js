/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;
    let result = []; 
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const sub = flat(el, n - 1);
          result.push(...sub);
      } else {
        result.push(el);
      }
    })
    return result;
};