function mostWordsFound(sentences: string[]): number {
  let max = handleWordCount(sentences[0]);
  for (let i = 1; i < sentences.length; i++) {
    const currLength = handleWordCount(sentences[i]);
    if (max < currLength) {
      max = currLength;
    }
  }
  return max;
};

function handleWordCount(s: string): number {
  const arr = s.trim().split(' ');
  return arr.length;
}
