/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function concat(word, set) {
  return word.split('').map((el) => {
        return set.has(el);
      });
}

function isAllowed(boolArr) {
  return boolArr.find(el => el === false) === undefined;
}

var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed.split(''));
    return words.reduce((acc, curr, index) => {
      count = 0;
      if (index === 1) {
        acc = 0;
        const b = concat(words[0], set);
        if (isAllowed(b)) count += 1;
      }
      const bool = concat(curr, set)
      if (isAllowed(bool)) count += 1;
      return count + acc;
    });
};