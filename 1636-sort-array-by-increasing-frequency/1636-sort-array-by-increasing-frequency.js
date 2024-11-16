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
      result.push([key, 1]);
      values[key] = 1;
      indexes[key] = nextIndex;
      nextIndex++;
    } else {
      const newValue = values[key] + 1;
      values[key] = newValue;
      result[possibleIndex] = [key, newValue];
    }
  }

  return result
    .sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1])
    .flatMap((el) => new Array(el[1]).fill(el[0]))
};