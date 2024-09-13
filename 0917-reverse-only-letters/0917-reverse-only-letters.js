/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const isAlphabetic = /^[a-zA-Z]+$/;
  const letters = [];
  const result = [];
  s.split('').forEach((curr, i) => {
    if (isAlphabetic.test(curr)) {
      letters.unshift(curr);
      result.push(null);
    } else {
      result.push(curr);
    }
  });
  return result.map((el, i) => el == null ? letters.splice(0, 1)[0] : el).join('');
};