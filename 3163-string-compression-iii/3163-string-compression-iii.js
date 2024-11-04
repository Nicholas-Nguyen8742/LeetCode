/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let result = '';
  let currChar = word[0];
  let currCount = 1;
  for (let i = 1; i < word.length + 1; i++) {
    const char = word[i];
    if (char === currChar) {
      if (currCount === 9) {
        result += `${currCount}${currChar}`;
        currCount = 1;
      } else {
        currCount++;
      }
      continue;
    }

    result += `${currCount}${currChar}`;

    currChar = char;
    currCount = 1;
  }

  return result;
};