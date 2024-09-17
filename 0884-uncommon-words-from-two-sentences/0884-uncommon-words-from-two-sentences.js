/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const first = splitStringToArr(s1);
  const second = splitStringToArr(s2);
  const largerLength = Math.max(first.length, second.length);
  const result = [];
  const set = new Set();

  for (let i = 0; i < largerLength; i++) {
    if (first[i] === second[i]) {
      set.add((first[i]));
      continue;
    }
    
    if (typeof first[i] === 'string') {
      const firstMatchedSelf = first.includes(first[i], i + 1);
      const secondMatchedOther = second.includes(first[i], i + 1);
      if (!set.has(first[i]) && !firstMatchedSelf && !secondMatchedOther) {
        result.push(first[i]);
      }
    }

    if (typeof second[i] === 'string') {
      const secondMatchedSelf = second.includes(second[i], i + 1);
      const firstMatchedOther = first.includes(second[i], i + 1);
      if (!set.has(second[i]) && !secondMatchedSelf && !firstMatchedOther) {
        result.push(second[i]);
      }
    }
    
    set.add(first[i]);
    set.add(second[i]);
  }

  return result;
};

var splitStringToArr = function(str) {
  return str.split(' ');
}