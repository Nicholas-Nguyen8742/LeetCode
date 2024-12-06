/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
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