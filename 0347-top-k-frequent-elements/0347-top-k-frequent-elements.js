/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  let max = {
    value: -Infinity,
    count: -Infinity,
  };

  nums.forEach((num) => {
    const search = map.get(num);
    const result = search != null ? search + 1 : 1;
    if (max.count < result) {
      max.value = num;
      max.count = result
    }
    map.set(num, result);
  });
  
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

var findNextMaxValue = function(map) {
  let max = {
    value: -Infinity,
    count: -Infinity,
  };

  for (const [key, value] of map) {
    if (max.count < value) {
      max.value = key;
      max.count = value;
    }
  }

  return max.value;
};
