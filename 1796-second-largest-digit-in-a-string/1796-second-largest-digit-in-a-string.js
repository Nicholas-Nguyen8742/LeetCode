/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const cleanString = s.replaceAll(/[^\d]/g, '');
  const stringNumberArray = cleanString.split('');
  if (stringNumberArray.length === 0) {
    return -1;
  }
  
  const numberArray = stringNumberArray.map((str) => parseInt(str));
  const set = new Set(numberArray);
  if (set.size === 1) {
    return -1;
  }

  let max = Math.max(...Array.from(set));
  set.delete(max);
  return Math.max(...Array.from(set));
};