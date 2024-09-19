/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const copy = [...s];
  let curr = s.length - 1;
  while (curr >= 0) {
    s[curr] = copy[s.length - curr - 1];
    curr -= 1;
  }
};