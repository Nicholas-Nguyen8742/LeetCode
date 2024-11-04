/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      result += s[i];
    } else {
      result += String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]));
    }
  }
  return result;
};