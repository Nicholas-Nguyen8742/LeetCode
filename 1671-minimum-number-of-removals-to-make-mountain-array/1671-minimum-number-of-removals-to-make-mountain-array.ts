function minimumMountainRemovals(nums: number[]): number {
  const numsLength = nums.length;

  const lisLength = Array(numsLength).fill(1);
  const ldsLength = Array(numsLength).fill(1);

  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lisLength[i] = Math.max(lisLength[i], lisLength[j] + 1);
      }
    }
  }

  for (let i = numsLength - 1; i >= 0; i--) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] > nums[j]) {
        ldsLength[i] = Math.max(ldsLength[i], ldsLength[j] + 1);
      }
    }
  }

  let minRemovals = Infinity;
  for (let i = 0; i < numsLength; i++) {
    if (lisLength[i] > 1 && ldsLength[i] > 1) {
      minRemovals = Math.min(minRemovals, numsLength - lisLength[i] - ldsLength[i] + 1);
    }
  }

  return minRemovals;
};