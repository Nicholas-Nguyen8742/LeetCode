/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, unmatched = '') {
  const hash = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  
  for (let i = 0; i < s.length; i++) {
    const unmatchedElIndex = unmatched.length - 1;
    const unmatchedEl = unmatched[unmatchedElIndex];
    if (unmatchedEl in hash && s[i] === hash[unmatchedEl]) {
      unmatched = unmatched.substring(0, unmatchedElIndex);
    } else {
      unmatched += s[i];
    }
  }

  return !unmatched.length;
};