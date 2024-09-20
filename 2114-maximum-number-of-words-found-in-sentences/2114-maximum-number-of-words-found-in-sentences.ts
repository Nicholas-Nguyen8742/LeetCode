function mostWordsFound(sentences: string[]): number {
  const arrayOfCounts = sentences.map(handleWordCount);
  return Math.max(...arrayOfCounts);
};

function handleWordCount(s: string): number {
  const arr = s.trim().split(' ');
  return arr.length;
}
