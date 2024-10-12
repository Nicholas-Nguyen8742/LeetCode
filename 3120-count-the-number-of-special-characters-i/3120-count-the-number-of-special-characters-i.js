/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  const uniqueWordArr = Array.from(new Set(word.split('')));
  const result = [];
  for (let i = 0; i < uniqueWordArr.length; i++) {
    if (uniqueWordArr[i].toLowerCase() === uniqueWordArr[i]) {
      continue;
    }

    if (uniqueWordArr.includes(uniqueWordArr[i].toLowerCase())) {
      result.push(i);
    }
  }

  return result.length;
};