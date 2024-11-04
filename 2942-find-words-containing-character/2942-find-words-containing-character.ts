function findWordsContaining(words: string[], x: string): number[] {
  let resultIndices = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      resultIndices.push(i);
    }
  }
  return resultIndices;
};