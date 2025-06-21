function mergeAlternately(word1: string, word2: string): string {
  const isWord1 = word1.length > word2.length;
  const larger = isWord1 ? word1 : word2;
  const other = isWord1 ? word2 : word1;
  return larger
    .split('')
    .flatMap((char, index) => isWord1 ? [char, other[index]] : [other[index], char])
    .join('')
};