/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
  const result = [];
  var buildSequence = function(currentIndex, currentCount, p) {
    if (currentIndex != p.length) {
      if (p[currentIndex] === 'I') {
        buildSequence(currentIndex + 1, currentIndex + 1, p);
      } else {
        currentCount = buildSequence(currentIndex + 1, currentCount, p);
      }
    }

    result.push(currentCount + 1);
    return currentCount + 1;
  };

  buildSequence(0, 0, pattern);

  return result.reverse().join('');
};
