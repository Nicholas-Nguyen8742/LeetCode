function minimumSize(nums: number[], maxOperations: number): number {
  let left = 1, right = Math.max(...nums);

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (isPossible(middle, nums, maxOperations)) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

function isPossible(maxCurrBalls: number, nums: number[], maxOperations: number): boolean {
  let total = 0;

  for (const num of nums) {
    total += Math.ceil(num / maxCurrBalls) - 1;
    if (total > maxOperations) {
      return false;
    }
  }
  return true;
};