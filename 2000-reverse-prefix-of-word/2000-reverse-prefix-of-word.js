/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let addedWord = '';
  
  for (let i = 0; i < word.length; i++) {
    addedWord = word[i] + addedWord;

    if (word[i] === ch) {
      return addedWord + word.slice(i + 1, word.length);
    }
  }

  return word;
};