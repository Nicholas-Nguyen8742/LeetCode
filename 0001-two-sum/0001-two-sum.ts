function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

       if (nums[j] + nums[i] === target) {
        return [i, j];
       }
    }
  }
  return [0,0];
};