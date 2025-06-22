function divideString(s: string, k: number, fill: string): string[] {
  const partitions = [];
  let curr = '';

  for (let i = 0; i < s.length; i++) {
    if (curr.length && curr.length % k === 0) {
      partitions.push(curr);
      curr = s[i];
    } else {
      curr += s[i];
    }
  }
  
  if (curr.length) {
    partitions.push(`${curr}${fill.repeat(k - curr.length)}`);
  }

  return partitions;
};