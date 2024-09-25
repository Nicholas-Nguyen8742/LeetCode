/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const arrayOfWords = sentence.split(' ');
  let i = 0;
  while (i < arrayOfWords.length) {
    if (arrayOfWords[i].startsWith(searchWord)) {
      return i + 1;
    }
    i++;
  }
  return -1;
};