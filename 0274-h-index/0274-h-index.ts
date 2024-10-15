function hIndex(citations: number[]): number {
  const n = citations.length;

  citations.sort((a, b) => a - b);

  let i = 0;
  while (i < n) {
    if (citations[i] >= n - i) {
      return n - i;
    }
    i++;
  }

  return 0;
};