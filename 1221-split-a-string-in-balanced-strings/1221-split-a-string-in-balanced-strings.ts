function balancedStringSplit(s: string): number {
  let balanceCount = 0, result = 0, i = 0;

  while (i < s.length) {
    s[i] === 'L' ? balanceCount++ : balanceCount--;

    if (balanceCount === 0) result++;
    
    i++;
  }
  
  return result;
};