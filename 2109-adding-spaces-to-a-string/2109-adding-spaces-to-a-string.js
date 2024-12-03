/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let result = '';
  let lastIndex;

  for (let i = 0; i <= spaces.length; i++) {
    const index = spaces[i];
    const separator = lastIndex == null ? '' : ' ';
    const startIndex = lastIndex == null ? 0 : lastIndex;
    result = result + separator + s.slice(startIndex, index);
    lastIndex = index;
  }

  return result;
};