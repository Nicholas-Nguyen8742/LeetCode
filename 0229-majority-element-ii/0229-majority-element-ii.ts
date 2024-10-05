function majorityElement(nums: number[]): number[] {
  if (nums.length < 3) {
    return Array.from(new Set(nums));
  }

  const hash = new Map();
  let result = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const curr = nums[i];
    const currCount = hash.get(curr);
    if (currCount) {
      const sum = currCount + 1;
      if (sum > (length / 3) && !result.includes(curr)) {
        result.push(curr);
      }
      hash.set(curr, sum);
    } else {
      hash.set(curr, 1);
    }
  }

  return result;
};