function maxCount(banned: number[], n: number, maxSum: number): number {
  const target = n + 1;
  const set = new Set(banned);
  let count = 0;  

  for (let i = 1; i < target; i++) {
    if (set.has(i)) {
      continue;
    }
    
    if (maxSum - i < 0) {
      return count;
    }

    maxSum -= i;
    count++;
  }

  return count;
};