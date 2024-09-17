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
    
    const iterations = [first[i], second[i]];
    iterations.forEach((word) => {
      if (typeof word === 'string') {
        const firstMatchedSelf = first.includes(word, i + 1);
        const secondMatchedOther = second.includes(word, i + 1);
        if (!set.has(word) && !firstMatchedSelf && !secondMatchedOther) {
          result.push(word);
        }
      }
    })

    set.add(first[i]);
    set.add(second[i]);
  }

  return result;
};

var splitStringToArr = function(str) {
  return str.split(' ');
};