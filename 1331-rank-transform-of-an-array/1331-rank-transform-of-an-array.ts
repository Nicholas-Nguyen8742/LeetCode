function arrayRankTransform(arr: number[]): number[] {
  const sorted = [...arr].sort((a, b) => a - b);

  const map = new Map();

  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], rank);
      rank += 1;
    } 
  }

  return arr.map((el) => map.get(el));
};