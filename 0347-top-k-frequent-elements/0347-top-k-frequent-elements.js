/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = createFrequencyMap(nums);
  
  let result = [];
  let i = 0;
  while (i < k) {
    const removedElement = findNextMaxValue(map);
    map.delete(removedElement);
    result.push(removedElement);
    i++;
  }

  return result;
};

var createFrequencyMap = function(array) {
  const map = new Map();

  array.forEach((num) => {
    const search = map.get(num);
    map.set(num, search != null ? search + 1 : 1);
  });

  return map;
};

var findNextMaxValue = function(map) {
  const max = Math.max(...Array.from(map.values()));
  let result;

  for (const [key, value] of map) {
    if (max === value) {
      result = key;
      break;
    }
  }

  return result;
};