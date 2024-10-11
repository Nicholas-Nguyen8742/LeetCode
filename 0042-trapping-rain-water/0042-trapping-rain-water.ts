function trap(height: number[]): number {
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