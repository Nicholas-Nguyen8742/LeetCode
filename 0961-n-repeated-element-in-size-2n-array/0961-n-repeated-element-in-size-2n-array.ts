function repeatedNTimes(nums: number[]): number {
  let hash = {};
  for (const num of nums) {
    if (num in hash) {
      return num;
    }

    hash[num] = num;
  }

  return -1;
};