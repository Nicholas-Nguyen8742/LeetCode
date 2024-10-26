function groupAnagrams(strs: string[]): string[][] {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const currWord = strs[i];
    const transformedWord = currWord.split('').sort().join('');
    if (transformedWord in map) {
      map[transformedWord] = [...map[transformedWord], currWord]
    } else {
      map[transformedWord] = [currWord];
    }
  }

  return Object.values(map);
};