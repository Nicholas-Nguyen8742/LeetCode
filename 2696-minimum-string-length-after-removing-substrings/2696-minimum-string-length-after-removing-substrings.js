/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let str = s;
  while (str.includes('AB') || str.includes('CD')) {
    str = str.replaceAll('CD', '');
    str = str.replaceAll('AB', '');
  }

  return str.length;
};