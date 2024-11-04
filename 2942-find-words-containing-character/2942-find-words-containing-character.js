/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  let resultIndices = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      resultIndices.push(i);
    }
  }
  return resultIndices;
};