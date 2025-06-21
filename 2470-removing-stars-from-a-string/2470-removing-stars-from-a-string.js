/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s, str = [], i = 0) {
  if (i === s.length) return str.join("");
  const char = s[i];
  if (char === '*') {
    str.pop();
  } else {
    str.push(char);
  }
  return removeStars(s, str, i + 1);
};