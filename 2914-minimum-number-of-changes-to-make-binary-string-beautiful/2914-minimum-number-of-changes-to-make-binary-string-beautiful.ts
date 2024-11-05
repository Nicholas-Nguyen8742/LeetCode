/**
 * @param {string} s
 * @return {number}
 */
function minChanges(s: string, minChangeCount: number = 0): number {
  if (s.length === 0) {
    return minChangeCount;
  }
  if (s[0] != s[1]) {
    minChangeCount += 1;
  }

  return minChanges(s.substring(2, s.length), minChangeCount);
};