/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s, str = []) {
  if (s.length === 0) return str.join("");
  const char = s[0];
  if (char === '*') {
    str.pop();
  } else {
    str.push(char);
  }
  return removeStars(s.substring(1, s.length), str);
};