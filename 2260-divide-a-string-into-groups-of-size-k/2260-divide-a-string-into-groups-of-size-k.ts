function divideString(s: string, k: number, fill: string): string[] {
  const partitions = [];
  const length = s.length;
  const leftover = length % k;
  const condition = leftover ? length - k : length;

  for (let i = 0; i < condition; i += k) {
    partitions.push(s.substring(i, i + k));
  }
  
  if (leftover) {
    const lastString = s.substring(length - leftover, length);
    partitions.push(`${lastString}${fill.repeat(k - lastString.length)}`);
  }

  return partitions;
};