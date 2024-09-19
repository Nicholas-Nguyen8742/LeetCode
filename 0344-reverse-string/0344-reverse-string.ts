/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const copy: string[] = [...s];
  let curr: number = 0;
  while (curr < s.length) {
    s[curr] = copy[s.length - 1 - curr];
    curr += 1;
  }
};