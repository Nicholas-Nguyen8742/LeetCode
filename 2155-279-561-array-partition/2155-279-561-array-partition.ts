function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let maximizedSum = 0;

  while (nums.length) {
    maximizedSum += Math.min(nums.shift(), nums.shift());
  }

  return maximizedSum;
};