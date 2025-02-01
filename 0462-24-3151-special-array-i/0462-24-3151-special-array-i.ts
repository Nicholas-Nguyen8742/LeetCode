function isArraySpecial(nums: number[]): boolean {
  let prevParity = getParity(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const currParity = getParity(nums[i]);
    if (currParity === prevParity) {
      return false;
    }

    prevParity = currParity;
  }
  return true;
};

function getParity(num: number): number {
  return num % 2 == 0 ? 0 : 1;
};