function countCharacters(words: string[], chars: string): number {
  const counts = new Array(26).fill(0);

  for (const ch of chars) {
    counts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = 0;

  for (const word of words) {
    if (canForm(word, counts)) {
      result += word.length;
    }
  }

  return result;
};

function canForm(word: string, counts: number[]) {
  const c = new Array(26).fill(0);

  for (const ch of word) {
    const x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    c[x]++;
    if (c[x] > counts[x]) {
      return false;
    }
  }

    return true;
};