/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  const parsedNums = nums.map((x) => BigInt(x)).sort((a, b) => a >= b ? -1 : 1);
  return parsedNums[k - 1].toString();
};