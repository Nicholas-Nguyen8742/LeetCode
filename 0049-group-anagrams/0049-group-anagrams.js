/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const currWord = strs[i];
    const transformedWord = currWord.split('').sort().join('');
    const result = [currWord];
    if (transformedWord in map) {
      result.push(...map[transformedWord]);
    }
    map[transformedWord] = result;
  }

  return Object.values(map);
};