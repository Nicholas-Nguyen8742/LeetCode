/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let size = 0;
  for (const char of s) {
    if (char === '[') {
      size++;
    } else {
      if (size > 0) {
        size--;
      }
    }
  }
  return Math.floor((size + 1) / 2);
};