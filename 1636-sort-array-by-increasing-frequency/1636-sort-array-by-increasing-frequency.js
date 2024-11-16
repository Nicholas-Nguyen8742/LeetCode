/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let indexes = { };
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const element = key in indexes && result[indexes[key]];
    if (element) {
      const newValue = element.value + 1;
      result[indexes[key]] = {
        key,
        value: newValue
      }
      continue;
    }
    result.push({ key, value: 1 });
    indexes[key] = result.length - 1;
  }

  return result
    .sort(function(a, b) {
      if (a.value === b.value) {
        return b.key - a.key; 
      }
      return a.value - b.value;
    })
    .flatMap(function(el) {
      return new Array(el.value).fill(el.key);
    });
};