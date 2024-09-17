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
    const word1 = first[i];
    const word2 = second[i];
    if (word1 === word2) {
      set.add(word1);
      continue;
    }
    
    const iterations = [word1, word2];
    iterations.forEach((word) => {
      if (typeof word === 'string') {
        const firstMatchedSelf = first.includes(word, i + 1);
        const secondMatchedOther = second.includes(word, i + 1);
        if (!set.has(word) && !firstMatchedSelf && !secondMatchedOther) {
          result.push(word);
        }
      }
    })

    set.add(word1);
    set.add(word2);
  }

  return result;
};

var splitStringToArr = function(str) {
  return str.split(' ');
};