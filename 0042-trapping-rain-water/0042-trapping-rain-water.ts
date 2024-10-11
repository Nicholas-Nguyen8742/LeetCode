function trap(height: number[]): number {
  let count = 0, right = height.length - 1, rightMax = height[right], left = 0, leftMax = height[left];

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