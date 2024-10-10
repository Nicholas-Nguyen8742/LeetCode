/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const length = nums.length;
  const stack = [];
  
  for (let i = 0; i < length; i++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }
  
  let maxWidth = 0;
  
  for (let j = length - 1; j >= 0; j--) {
    while(stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - stack.pop());
    }
  }
  return maxWidth;
};