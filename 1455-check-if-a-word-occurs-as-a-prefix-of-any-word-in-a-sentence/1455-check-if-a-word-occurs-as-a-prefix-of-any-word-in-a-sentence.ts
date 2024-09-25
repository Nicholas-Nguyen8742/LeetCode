function isPrefixOfWord(sentence: string, searchWord: string): number {
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