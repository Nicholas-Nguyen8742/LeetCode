/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = new Map();
  let indexes = { };
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const value = map.get(key);
    if (value != null) {
      const prev = result[indexes[key]];
      const newValue = value + 1;
      result[indexes[key]] = {
        ...prev,
        value: newValue
      }
      map.set(key, newValue);
    } else {
      result.push({ key, value: 1 });
      indexes[key] = result.length - 1;
      map.set(key, 1);
    }
  }

  return result.sort(sortComparator).flatMap(fillElement);
};

var sortComparator = function(a, b) {
  if (a.value === b.value) {
    return b.key - a.key; 
  } else {
    return a.value - b.value;
  }
}

var fillElement = function(el) {
  return new Array(el.value).fill(el.key);
};