/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  
  for (let i = 0; i < strs.length; i++) {
    const currWord = strs[i];
    const transformedWord = currWord.split('').sort().join('');
    if (map.has(transformedWord)) {
      map.set(transformedWord, [...map.get(transformedWord), currWord])
    } else {
      map.set(transformedWord, [currWord]);
    }
  }
  
  return Array.from(map.values())
};