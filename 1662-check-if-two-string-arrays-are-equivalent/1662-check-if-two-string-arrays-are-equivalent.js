/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function concat(arr) {
  return arr.join('');
}
var arrayStringsAreEqual = function(word1, word2) {
    return concat(word1) === concat(word2);
};