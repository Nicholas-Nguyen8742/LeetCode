function addSpaces(s: string, spaces: number[]): string {
  let result: string = '';
  let lastIndex: number | undefined;

  for (let i = 0; i <= spaces.length; i++) {
    const index = spaces[i];
    const separator = lastIndex == null ? '' : ' ';
    const startIndex = lastIndex == null ? 0 : lastIndex;
    result = result + separator + s.slice(startIndex, index);
    lastIndex = index;
  }

  return result;
};