/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const hash = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  
  let unmatched = '';
  
  let i = 0;
  while (i < s.length) {
    const unmatchedElIndex = unmatched.length - 1;
    const unmatchedEl = unmatched[unmatchedElIndex];
    if (
      unmatchedEl in hash
      && s[i] === hash[unmatchedEl]
    ) {
      unmatched = unmatched.substring(0, unmatchedElIndex);
    } else {
      unmatched += s[i];
    }
    i++;
  }
  
  return !unmatched.length;
};