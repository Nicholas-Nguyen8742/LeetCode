/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b);

  let res = 0, i = 0, j = nums.length - 1;

  while (i < j) {
    const temp = nums[i] + nums[j];
    if (temp === k) { i++, j--, res++; continue; }

    if (temp > k) { j--; continue; }

    i++;
  }

  return res;
};