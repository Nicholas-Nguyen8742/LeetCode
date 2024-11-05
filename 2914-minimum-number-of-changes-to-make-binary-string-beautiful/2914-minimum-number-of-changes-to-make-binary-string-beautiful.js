/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s, minChangeCount = 0) {
  if (s.length === 0) {
    return minChangeCount;
  }
  if (s[0] != s[1]) {
    minChangeCount += 1;
  }

  return minChanges(s.substring(2, s.length), minChangeCount);
};