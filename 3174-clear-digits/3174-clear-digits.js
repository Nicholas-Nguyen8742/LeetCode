/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  const firstDigitIndex = s.search(/\d/);
  if (firstDigitIndex === -1) {
    return s;
  }

  let nearestLeft;
  let index = firstDigitIndex - 1;

  while (nearestLeft == null || index < 0) {
    if ((s[index]).search(/\d/) !== 0) {
      nearestLeft = index;
    } else {
      index--;
    }
  }

  if (nearestLeft == null) {
    return s;
  }
  let str = replaceString(s, firstDigitIndex);
  str = replaceString(str, nearestLeft);

  return clearDigits(str);
};

var replaceString = function(s, index) {
  return s.substring(0, index) + s.substring(index + 1);
}