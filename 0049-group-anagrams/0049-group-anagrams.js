/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const currWord = strs[i];
    const uniqueKey = currWord.split('').sort().join('');
    const result = [currWord];
    if (uniqueKey in map) {
      result.push(...map[uniqueKey]);
    }
    map[uniqueKey] = result;
  }

  return Object.values(map);
};