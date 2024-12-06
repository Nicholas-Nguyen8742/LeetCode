/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const target = n + 1;
  let count = 0;  
  const set = new Set(banned);

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