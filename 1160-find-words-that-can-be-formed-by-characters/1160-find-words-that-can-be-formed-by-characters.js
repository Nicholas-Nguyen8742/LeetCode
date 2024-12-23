/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const counts = new Array(26).fill(0);

  for (const ch of chars) {
    counts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = 0;

  for (const word of words) {
    if (canForm(word, counts)) {
      result += word.length;
    }
  }

  return result;
};

var canForm = function(word, counts) {
  const c = new Array(26).fill(0);

  for (const ch of word) {
    const x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    c[x]++;
    if (c[x] > counts[x]) {
      return false;
    }
  }

    return true;
};