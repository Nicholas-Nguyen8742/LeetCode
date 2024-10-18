function countMaxOrSubsets(nums: number[]): number {
  let maxOr = 0;

  for (let num of nums) {
    maxOr |= num;
  }

  let count = 0;

  function backtrack(index: number, currentOr: number): void {
    if (currentOr === maxOr) {
      count++;
    }

    for (let i = index; i < nums.length; i++) {
      backtrack(i + 1, currentOr | nums[i]);
    }
  };

  backtrack(0, 0);

  return count;
};