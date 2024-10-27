function kthLargestNumber(nums: string[], k: number): string {
  const parsedNums = nums.map((x) => BigInt(x)).sort((a, b) => a >= b ? -1 : 1);
  return parsedNums[k - 1].toString();
};