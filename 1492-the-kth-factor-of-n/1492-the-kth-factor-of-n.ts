function kthFactor(n: number, k: number): number {
  const arr = [];
  for (let i = 1; i <= n + 1; i++) {
    if (n % i === 0) {
      if (arr.length === k - 1) {
          return i;
      }
      arr.push(i);
    }
  }
  
  return -1;
};