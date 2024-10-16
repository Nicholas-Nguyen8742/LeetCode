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

  for (let i = 0; i < list2.length; i++) {
    const hasValue = map.has(list2[i]);
    if (hasValue) {
      const value = map.get(list2[i]);
      map.set(list2[i], [value[0], i]);
      min = Math.min(value[0] + i, min);
    }
  }
  
  map.forEach((value, key, map) => {
    if (value[1] == null) {
      return;
    }
    const indexSum = value[0] + value[1];
    if (indexSum === min) {
      result.push(key);
    }
  });
  
  return result;
};