/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let rightSum = totalSum;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};