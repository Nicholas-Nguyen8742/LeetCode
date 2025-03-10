/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
  return isAtleastK(word, k) - isAtleastK(word, k + 1);
};

var isAtleastK = function(word, k) {
  let validSubstringCount = 0, start = 0, end = 0, consonantCount = 0, vowelCount = {};
  
  while (end < word.length) {
    let newLetter = word[end];

    if (isVowel(newLetter)) {
      const newLetterCount = newLetter in vowelCount ? vowelCount[newLetter] + 1 : 0;
      vowelCount[newLetter] = newLetterCount;
     } else {
      consonantCount += 1
    }

    while (Object.keys(vowelCount).length == 5 && consonantCount >= k) {
      validSubstringCount += word.length - end;
      const startLetter = word[start];
      const val = vowelCount[startLetter];
      if (isVowel(startLetter)) {
          vowelCount[startLetter] = val - 1;
        if (val == 0) {
          delete vowelCount[startLetter];
        }
      } else {
        consonantCount -= 1;
      }
      start += 1
    }
  
    end += 1
  }

  return validSubstringCount;
}

var isVowel = function(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
};


