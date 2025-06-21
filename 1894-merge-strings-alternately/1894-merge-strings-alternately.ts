function combine(char: string, index: number, str: string, isWord1: boolean) {
  return isWord1 ? [char, str[index]] : [str[index], char];
}


function mergeAlternately(word1: string, word2: string): string {
  const isWord1 = word1.length > word2.length;
  const larger = isWord1 ? word1 : word2;
  const other = isWord1 ? word2 : word1;
  return larger
    .split('')
    .flatMap((char, index) => combine(char, index, other, isWord1))
    .join('')
};