/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  if (word.length < 3 || !(word.search(/[^a-zA-Z\d:]/i) < 0) || !(word.search(/^[^aeiou]+$/i) < 0) || !(word.search(/^[^bcdfghjklmnpqrstvwxyz]+$/i) < 0)) {
    return false;
  }

  return true;
};
