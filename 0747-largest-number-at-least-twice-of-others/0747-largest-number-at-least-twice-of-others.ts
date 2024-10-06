function dominantIndex(nums: number[]): number {
  const max = Math.max(...nums);
  let maxIndex;
  for (let i = 0; i < nums.length; i++) {
    if (max === nums[i]) {
      maxIndex = i;
      continue;
    }

    if (2 * (nums[i]) <= max) {
      continue;
    }

    return -1;
  }
  
  return maxIndex;
};