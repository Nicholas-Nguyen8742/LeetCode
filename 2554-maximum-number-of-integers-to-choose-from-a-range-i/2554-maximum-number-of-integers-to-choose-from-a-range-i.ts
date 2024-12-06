function maxCount(banned: number[], n: number, maxSum: number): number {
  const target = n + 1;
  const set = new Set(banned);
  let count = 0;  

  let num = 1;
  while (num < target) {
    if (set.has(num)) {
      num++;
      continue;
    }
    
    if (maxSum - num < 0) {
      return count;
    }

    maxSum -= num;
    count++;
    num++;
  }

  return count;
};