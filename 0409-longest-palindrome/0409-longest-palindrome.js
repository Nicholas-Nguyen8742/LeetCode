/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const set = Object.create(null);
  let count = 0;

  for (const char of s) {
    if (char in set) {
			count += 2;
      delete set[char];
    } else {
      set[char] = char;
    }
  }

  return Object.keys(set).length > 0 ? count + 1 : count;
};