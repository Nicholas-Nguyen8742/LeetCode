/**
 * @param {string} s
 * @return {number}
 */
function minChanges(s: string): number {
  let minChangesRequired = 0;
  
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] != s[i + 1]) {
      minChangesRequired += 1;
    }
  }

  return minChangesRequired;
};