/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const map = new Map();
    gain.unshift(0);
    gain.map((el, index) => {
      index === 0 && map.set(index, el);
      if (index > 0) {
          const before = map.get(index - 1);
          map.set(index, before + el);
      }
    });
    return Math.max(...Object.values(Object.fromEntries(map)));
};