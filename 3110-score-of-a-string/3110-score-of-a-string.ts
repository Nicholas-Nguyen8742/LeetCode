function scoreOfString(s: string): number {
  let sum = 0;
  let i = 0;
  while (i < s.length - 1) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    i++;
  }

  return sum;
};