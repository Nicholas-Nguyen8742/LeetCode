function largestDivisibleSubset(nums: number[]): number[] {
  if (!nums.length) return [];

  const n = nums.length;
  nums.sort((a, b) => a - b);

  const dp = new Array(n).fill(1);
  const prevIndex = new Array(n).fill(-1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prevIndex[i] = j;
      }
    }
  }

  let maxIndex = dp.indexOf(Math.max(...dp));

  const result = [];
  while (maxIndex !== -1) {
    result.unshift(nums[maxIndex]);
    maxIndex = prevIndex[maxIndex];
  }

  return result;
};