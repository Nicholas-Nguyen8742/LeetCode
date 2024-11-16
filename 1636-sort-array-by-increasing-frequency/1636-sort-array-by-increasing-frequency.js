/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let indexes = { };
  let result = [];
  let nextIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const possibleIndex = indexes[key];
    if (possibleIndex == null) {
      result.push({ key, value: 1 });
      indexes[key] = nextIndex;
      nextIndex++;
    } else {
      let element = result[possibleIndex];
      const newValue = element.value + 1;
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