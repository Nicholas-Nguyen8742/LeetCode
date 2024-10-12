/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  const uniqueWordArr = Array.from(new Set(word.split('')));
  const result = [];
  for (let i = 0; i < uniqueWordArr.length; i++) {
    const lowercaseCurr = uniqueWordArr[i].toLowerCase();
    if (lowercaseCurr === uniqueWordArr[i]) {
      continue;
    }

    if (uniqueWordArr.includes(lowercaseCurr)) {
      result.push(i);
    }
  }

  return result.length;
};