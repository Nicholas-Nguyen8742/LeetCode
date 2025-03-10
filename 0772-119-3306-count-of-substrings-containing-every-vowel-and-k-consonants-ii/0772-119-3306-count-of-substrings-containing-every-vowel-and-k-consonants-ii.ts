function countOfSubstrings(word: string, k: number): number {
  return isAtleastK(word, k) - isAtleastK(word, k + 1);
};

function isAtleastK(word: string, k: number): number {
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

function isVowel(char: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
};