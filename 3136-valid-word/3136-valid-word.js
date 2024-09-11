/**
 * @param {string} word
 * @return {boolean}
 */

var everyTrue = function(arr) {
  return arr.every((el) => el === true);
}

var isValid = function(word) {
  if (word.length < 3) {
    return false;
  }

  if (!(word.search(/[^a-zA-Z\d:]/i) < 0)) {
    return false;
  }

  if (!(word.search(/^[^aeiou]+$/i) < 0)) {
    return false;
  }

  if (!(word.search(/^[^bcdfghjklmnpqrstvwxyz]+$/i) < 0)) {
    return false;
  }

  return true;
};
