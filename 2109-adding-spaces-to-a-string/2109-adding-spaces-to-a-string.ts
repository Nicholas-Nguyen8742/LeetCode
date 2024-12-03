function addSpaces(s: string, spaces: number[]): string {
  let result: string = '';
  let lastIndex: number | undefined;

  for (let i = 0; i <= spaces.length; i++) {
    result += (lastIndex == null ? '' : ' ') + s.slice((lastIndex == null ? 0 : lastIndex), spaces[i]);
    lastIndex = spaces[i];
  }

  return result;
};