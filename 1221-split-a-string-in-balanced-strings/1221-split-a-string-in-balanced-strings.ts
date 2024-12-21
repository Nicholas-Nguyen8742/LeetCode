function balancedStringSplit(s: string): number {
  let balanceCount = 0, result = 0;
  
  for (let i = 0, increment = (char) => char === 'L' ? balanceCount++ : balanceCount--; i < s.length; i++) {
    increment(s[i]);
    if (balanceCount === 0) result++;
  } 
  
  return result;
};