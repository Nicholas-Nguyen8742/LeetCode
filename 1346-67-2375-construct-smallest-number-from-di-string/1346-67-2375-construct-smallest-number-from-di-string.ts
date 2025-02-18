function smallestNumber(pattern: string): string {
  const result = [];
  var buildSequence = function(currentIndex: number, currentCount: number, p: string): number {
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