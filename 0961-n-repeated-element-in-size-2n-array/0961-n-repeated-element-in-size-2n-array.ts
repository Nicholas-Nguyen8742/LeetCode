function repeatedNTimes(nums: number[]): number {
  let hash = {};
  for (const num of nums) {
    if (isNotNull(hash[num])) {
      return num;
    }

    hash[num] = num;
  }

  return -1;
};

function isNotNull(value: any): boolean {
  return value != null;
}