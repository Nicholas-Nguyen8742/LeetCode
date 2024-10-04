/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (nums.length < 3) {
    const set = new Set(nums);
    return Array.from(set);
  }
  const hash = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const element = hash.get(nums[i]);
    if (element) {
      const sum = element + 1;
      if (sum > (nums.length / 3) && !result.includes(nums[i])) {
        result.push(nums[i]);
      }
      hash.set(nums[i], sum);
    } else {
      hash.set(nums[i], 1);
    }
  }
  
  return result;
};