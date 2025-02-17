function check(nums: number[]): boolean {
  let count = 0;
  const length = nums.length - 1;
  for (let i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
        count++;
    }
  }

  if (count > 1 || (count === 1 && nums[0] < nums[length])) {
    return false;
  }

  return true;
};