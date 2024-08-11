/**
 * @param {number[]} nums
 * @return {number}
 */

var addSum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = addSum(nums);
  
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - nums[i]) {
      return i;
    }
 
    leftSum += nums[i];
    rightSum -= nums[i];
  }
  
  return -1;
};