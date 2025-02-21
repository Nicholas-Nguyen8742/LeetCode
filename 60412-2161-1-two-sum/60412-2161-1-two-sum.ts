function twoSum(nums: number[], target: number): number[] {
  let i = 0;
  while (i < nums.length) {
    let j = 0;
    while (j < nums.length) {
      if (i === j) {
        j++;
        continue;
      }

      if (nums[j] + nums[i] === target) return [i, j]
      j++;
    }
    i++;
  }
};