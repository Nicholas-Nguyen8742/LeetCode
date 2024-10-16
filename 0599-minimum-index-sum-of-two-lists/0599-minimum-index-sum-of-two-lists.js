/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  let min = Infinity;
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], [i, null]);
  }

  for (let j = 0; j < list2.length; j++) {
    const hasValue = map.has(list2[j]);
    if (hasValue) {
      const value = map.get(list2[j]);
      map.set(list2[j], [value[0], j]);
      min = Math.min(value[0] + j, min);
    }
  }

  map.forEach(([val1, val2], key, map) => {
    if (val2 == null) {
      return;
    }
    const indexSum = val1 + val2;
    if (indexSum === min) {
      result.push(key);
    }
  });

  return result;
};