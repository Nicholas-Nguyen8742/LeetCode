/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  let freq = { };
  let result = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    if (nums[i] !== key) continue;
    const target = nums[i + 1];
    freq[target] = (freq[target] || 0) + 1;
    if (freq[target] > max) {
      max = freq[target];
      result = target;
    }
  }
  return result;
};