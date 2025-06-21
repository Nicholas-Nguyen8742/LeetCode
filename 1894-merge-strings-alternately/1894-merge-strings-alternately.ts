function mergeAlternately(word1: string, word2: string): string {
  let word = '', i = 0;
  while (word1.length > i || word2.length > i) {
    word += ((word1[i] || '') + (word2[i] || ''));
    i++;
  }
  return word;
};