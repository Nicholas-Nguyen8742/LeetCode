/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  const cases = [word.length > 2, word.search(/[^a-zA-Z\d:]/i) < 0, word.search(/^[^aeiou]+$/i) < 0, word.search(/^[^bcdfghjklmnpqrstvwxyz]+$/i) < 0];

  return cases.every((el) => el === true);
};
