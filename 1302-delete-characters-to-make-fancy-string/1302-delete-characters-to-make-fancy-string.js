/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let prev = s[0], result = s[0], count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev) {
      count++;
    } else {
      prev = s[i];
      count = 1;
    }
    if (count < 3) {
      result += s[i];
    }
  }

  return result;
};