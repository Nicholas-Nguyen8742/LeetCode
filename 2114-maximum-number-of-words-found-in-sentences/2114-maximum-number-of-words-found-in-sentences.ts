function mostWordsFound(sentences: string[]): number {
  return Math.max(...(sentences.map(handleWordCount)));
};

function handleWordCount(s: string): number {
  return s.trim().split(' ').length;
}
