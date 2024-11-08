/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
  let xor = 0;
  
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  
  let ans = new Array(nums.length);
  let mask = (1 << maximumBit) - 1;
  
  for (let i = 0; i < nums.length; i++) {
    ans[i] = xor ^ mask;
    xor ^= nums[nums.length - 1 - i];
  }

  return ans;
};