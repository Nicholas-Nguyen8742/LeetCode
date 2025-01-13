/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  const frequency = new Map();
  let toDeleteCount = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const value = (frequency.get(char) || 0) + 1;
    
    frequency.set(char, value);

    if (!(s.substring(i + 1).includes(char))) {
      if (value % 2 === 1) {
        toDeleteCount += (value - 1);
      } else {
        toDeleteCount += (value - 2);
      }
    }

  }

  return s.length - toDeleteCount;
};