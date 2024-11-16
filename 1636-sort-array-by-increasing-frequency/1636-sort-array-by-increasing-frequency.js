/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let indexes = { };
  let values = { };
  let result = [];
  let nextIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const possibleIndex = indexes[key];
    if (possibleIndex == null) {
      result.push({ key, value: 1 });
      values[key] = 1;
      indexes[key] = nextIndex;
      nextIndex++;
    } else {
      values[key] + 1
      const newValue = values[key] + 1;
      values[key] = newValue;
      result[possibleIndex] = {
        key,
        value: newValue
      }
    }
  }

  return result
    .sort((a, b) => a.value === b.value ? b.key - a.key : a.value - b.value)
    .flatMap((el) => new Array(el.value).fill(el.key));
};