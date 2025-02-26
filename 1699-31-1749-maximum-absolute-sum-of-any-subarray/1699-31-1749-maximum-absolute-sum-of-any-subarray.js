/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let minSum = 0, maxSum = 0, prefixSum = 0;

  for (const num of nums) {
    prefixSum += num;
    minSum = Math.min(minSum, prefixSum);
    maxSum = Math.max(maxSum, prefixSum);
  }

  return maxSum - minSum;
};