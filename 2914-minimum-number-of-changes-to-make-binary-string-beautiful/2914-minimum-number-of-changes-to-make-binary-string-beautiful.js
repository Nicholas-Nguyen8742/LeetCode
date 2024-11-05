/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let curr = s[0];
  let consecutiveCount = 0;
  let minChangesRequired = 0;
  
  for (const char of s) {
    if (char === curr) {
      consecutiveCount += 1;
      continue;
    }
    
    if (consecutiveCount % 2 === 0) {
      consecutiveCount = 1;
    } else {
      consecutiveCount = 0;
      minChangesRequired += 1;
    }
    
    curr = char;
  }

  return minChangesRequired;
};