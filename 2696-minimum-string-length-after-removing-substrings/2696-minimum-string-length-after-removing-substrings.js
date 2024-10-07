/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const conditionAB = s.includes('AB');
  const conditionCD = s.includes('CD');
  if (!conditionAB && !conditionCD) {
    return s.length;
  }

  let str = s;
  if (conditionAB) {
    str = s.replaceAll('AB', '');
  }

  if (conditionCD) {
    str = s.replaceAll('CD', '');
  }

  return minLength(str);
};