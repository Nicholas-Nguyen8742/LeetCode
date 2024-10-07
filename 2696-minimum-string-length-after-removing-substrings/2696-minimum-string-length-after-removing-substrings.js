/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replaceAll('CD', '');
    s = s.replaceAll('AB', '');
  }

  return s.length;
};