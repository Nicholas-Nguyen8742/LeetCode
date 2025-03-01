/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  let zeros = 0;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }

    if (nums[i] === 0) {
      zeros++;
    } else {
      result.push(nums[i]);
    }
  }

  return result.concat(new Array(zeros).fill(0));
};