function smallestNumber(pattern: string): string {
  const sm = Object.create(smallestNumber.prototype);
  sm.result = [];

  sm.buildSequence(0, 0, pattern);

  return sm.result.reverse().join('');
};

smallestNumber.prototype.buildSequence = function(currentIndex: number, currentCount: number, p: string): number {
  if (currentIndex != p.length) {
    if (p[currentIndex] === 'I') {
      this.buildSequence(currentIndex + 1, currentIndex + 1, p);
    } else {
      currentCount = this.buildSequence(currentIndex + 1, currentCount, p);
    }
  }

  this.result.push(currentCount + 1);
  return currentCount + 1;
};