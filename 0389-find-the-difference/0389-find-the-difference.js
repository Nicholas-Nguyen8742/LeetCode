/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let i = 0;
  while (i < t.length) {
    if (s.includes(t[i])) {
      s = s.replace(t[i], '');
    } else {
      return t[i];
    }
    i++;
  }
};