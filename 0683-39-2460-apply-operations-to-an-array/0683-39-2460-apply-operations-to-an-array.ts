function applyOperations(nums: number[]): number[] {
  const zeros = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    const next = nums[i + 1];
    if (curr === next) {
      curr = curr * 2;
      nums[i + 1] = 0;
    }

    if (curr === 0) {
      zeros.push(0);
    } else {
      result.push(curr);
    }
  }

  return [...result, ...zeros];
};