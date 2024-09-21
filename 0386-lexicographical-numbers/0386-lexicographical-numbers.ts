function lexicalOrder(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1).sort();
};