function maximumSubarraySum(nums: number[], k: number): number {
  let ans = 0;
  let currentSum = 0;
  let begin = 0;
  let end = 0;
  const numToIndex = new Map();

  while (end < nums.length) {
    const currNum = nums[end];
    const lastOccurrence = numToIndex.has(currNum) ? numToIndex.get(currNum) : -1;

    while (begin <= lastOccurrence || end - begin + 1 > k) {
      currentSum -= nums[begin];
      begin++;
    }

    numToIndex.set(currNum, end);
    currentSum += nums[end];

    if (end - begin + 1 === k) {
      ans = Math.max(ans, currentSum);
    }

    end++;
  }

  return ans;
};