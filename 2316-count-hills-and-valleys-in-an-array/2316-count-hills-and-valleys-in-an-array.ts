function countHillValley(nums: number[]): number {
  let count = 0;
  const n = nums.length;
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let left = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        left = 1;
        break;
      } else if (nums[j] < nums[i]) {
        left = -1;
        break;
      }
    }

    let right = 0;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[i]) {
        right = 1;
        break;
      } else if (nums[j] < nums[i]) {
        right = -1;
        break;
      }
    }

    if (left === right && left !== 0) {
      count++;
    }
  }

  return count;
};