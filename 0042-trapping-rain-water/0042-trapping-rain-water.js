/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let count = 0;
  let right = height.length - 1;
  let rightMax = height[right];
  let left = 0;
  let leftMax = height[left];

  while (left < right) {
    if (leftMax <= rightMax) {
      count += leftMax - height[left];
      left++;
      leftMax = Math.max(leftMax, height[left]);
    } else {
      count += rightMax - height[right];
      right--;
      rightMax = Math.max(rightMax, height[right]);
    }
  }
  
  return count;
};
// var trap = function(height) {
//   let i = height.length - 2;
//   let count = 0;
//   let currCount = 0;

//   let left = height[height.length - 3];
//   let right = height[height.length - 1];

//   let leftPeak = left;
//   let rightPeak = right;
//   while (i >= 0) {
//     const curr = height[i];
    
//     if ()
    
//     left = height[i - 1];
//     right = height[i + 1];
//     i--;
//   }

//   return count;
// };