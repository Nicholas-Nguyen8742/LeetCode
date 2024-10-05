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
  
  const numberArray = stringNumberArray.map((str) => parseInt(str)).sort();
  let max;
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (max == null) {
      max = numberArray[i];
    }
    
    if (numberArray[i] === max) {
      continue;
    }
    
    return numberArray[i];
  }
  return -1;
};