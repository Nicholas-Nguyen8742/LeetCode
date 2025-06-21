/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const str = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '*') {
      str.pop();
    } else {
      str.push(char);
    }
  }
  return str.join("");
};