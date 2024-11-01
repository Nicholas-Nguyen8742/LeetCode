/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let result = s[0];
  let consecutiveCount = 1;
  let i = 1;
  while (i < s.length) {
    if (s[i] === result[result.length - 1]) {
      consecutiveCount++;
    } else {
      consecutiveCount = 1;
    }
    
    if (consecutiveCount < 3) {
      result += s[i];
    }

    i++;
  }
  
  return result;
};