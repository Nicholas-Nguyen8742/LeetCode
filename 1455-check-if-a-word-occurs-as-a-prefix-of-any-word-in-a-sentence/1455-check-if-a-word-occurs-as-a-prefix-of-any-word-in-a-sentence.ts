function isPrefixOfWord(sentence: string, searchWord: string): number {
  const arrayOfWords = sentence.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};