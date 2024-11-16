/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const value = map.get(key);
    console.log(value);
    
    value != null ? map.set(key, value + 1) : map.set(key, 1);
  }
  
  return toArray(map);
};

var toArray = function(map) {
  let result = [];
  map.forEach((value, key) => {
    result.push({ key, value });
  });

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