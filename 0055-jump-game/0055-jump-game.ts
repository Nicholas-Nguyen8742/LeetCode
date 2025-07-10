function canJump(nums: number[]): boolean {
  const length = nums.length;
  let i = 0, max = 0, target = length - 1;
  while (i < length) {
    max = Math.max(max, i + nums[i]);
    if (max >= target) {
      return true;
    }
    if (max <= i && nums[i] === 0) {
      return false;
    }

    i++;
  }

  return false;
};