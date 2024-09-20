function mostWordsFound(sentences: string[]): number {
  return Math.max(...(sentences.map(handleWordCount)));
};

function handleWordCount(s: string): number {
  const arr = s.trim().split(' ');
  return arr.length;
}
