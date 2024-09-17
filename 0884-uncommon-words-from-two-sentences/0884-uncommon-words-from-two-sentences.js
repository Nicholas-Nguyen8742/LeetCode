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
    const iterations = [first[i], second[i]];
    if (iterations[0] === iterations[1]) {
      set.add(iterations[0]);
      continue;
    }

    iterations.forEach((word) => {
      if (typeof word === 'string') {
        const firstMatchedSelf = first.includes(word, i + 1);
        const secondMatchedOther = second.includes(word, i + 1);
        if (!set.has(word) && !firstMatchedSelf && !secondMatchedOther) {
          result.push(word);
        }
      }
    })

    set.add(iterations[0]);
    set.add(iterations[1]);
  }

  return result;
};

var splitStringToArr = function(str) {
  return str.split(' ');
};