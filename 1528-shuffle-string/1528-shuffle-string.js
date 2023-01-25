/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const map = new Map();
    s.split('').map((el, key) => {
      if (!map.has(indices[key])) map.set(indices[key], el);
    });
    return indices.map((el, key) => map.get(key)).join('');
};