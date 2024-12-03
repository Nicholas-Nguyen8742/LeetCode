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
    result += (lastIndex == null ? '' : ' ') + s.slice((lastIndex == null ? 0 : lastIndex), index);
    lastIndex = index;
  }

  return result;
};