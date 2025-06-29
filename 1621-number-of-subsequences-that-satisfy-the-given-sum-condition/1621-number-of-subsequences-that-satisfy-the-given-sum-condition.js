/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  const modulo = 1e9 + 7;
  const length = nums.length;
  nums.sort((a, b) => a - b);

  const power = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    power[i] = (power[i - 1] * 2) % modulo;
  }

  let result = 0, left = 0, right = length;
  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      result = (result + power[right - left]) % modulo;
      left++
    } else {
      right--;
    }
  }
  return result;
};