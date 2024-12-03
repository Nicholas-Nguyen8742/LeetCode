/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let result = '', lastIndex;

  for (let i = 0; i <= spaces.length; i++) result += (lastIndex == null ? '' : ' ') + s.slice((lastIndex == null ? 0 : lastIndex), spaces[i]), lastIndex = spaces[i];

  return result;
};