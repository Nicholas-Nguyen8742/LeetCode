/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let prev = s[0];
  let result = s[0];
  let consecutiveCount = 1;
  const str = s.substring(1, s.length);
  for (const char of str) {
    if (char === prev) {
      consecutiveCount++;
    } else {
      prev = char;
      consecutiveCount = 1;
    }
    if (consecutiveCount < 3) {
      result += char;
    }
  }
  return result;
};