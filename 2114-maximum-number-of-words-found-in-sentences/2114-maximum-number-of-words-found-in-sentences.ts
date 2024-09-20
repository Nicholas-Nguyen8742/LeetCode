function mostWordsFound(sentences: string[]): number {
  function handleWordCount(s: string): number {
    return s.trim().split(' ').length;
  };
  return Math.max(...(sentences.map(handleWordCount)));
};
