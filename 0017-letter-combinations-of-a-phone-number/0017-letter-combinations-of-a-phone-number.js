/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  let result = [''];

  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  for (const digit of digits) {
    const newCombinations = [];
    for (const combination of result) {
      for (const letter of mapping[digit]) {
        newCombinations.push(combination + letter);
      }
    }
    result = newCombinations;
  }

  return result;
};