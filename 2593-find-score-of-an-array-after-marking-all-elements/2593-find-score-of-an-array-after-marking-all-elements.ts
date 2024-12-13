function findScore(nums: number[]): number {
  let score = 0;
  const sorted = nums.map((num, idx) => [num, idx]);
  sorted.sort((a, b) => a[0] - b[0]);

  const marked = Array(nums.length).fill(false);

  for (let i = 0; i < nums.length; i++) {
    const [number, index] = sorted[i];
    if (!marked[index]) {
      score += number;
      marked[index] = true;

      if (index - 1 >= 0) marked[index - 1] = true;
      if (index + 1 < nums.length) marked[index + 1] = true;
    }
  }

  return score;
};