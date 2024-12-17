/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  const freq = Array(26).fill(0);

  for (const char of s) {
    freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const result = [];
  let currentCharIndex = 25;

  while (currentCharIndex >= 0) {
    if (freq[currentCharIndex] === 0) {
      currentCharIndex--;
      continue;
    }

    const use = Math.min(freq[currentCharIndex], repeatLimit);
    result.push(String.fromCharCode(currentCharIndex + "a".charCodeAt(0)).repeat(use));
    freq[currentCharIndex] -= use;

    if (freq[currentCharIndex] > 0) {
      let smallerCharIndex = currentCharIndex - 1;
      while (smallerCharIndex >= 0 && freq[smallerCharIndex] === 0) {
        smallerCharIndex--;
      }
      if (smallerCharIndex < 0) {
        break;
      }

      result.push(String.fromCharCode(smallerCharIndex + "a".charCodeAt(0)));
      freq[smallerCharIndex]--;
    }
  }

  return result.join("");
};