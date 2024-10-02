function arrayRankTransform(arr: number[]): number[] {
  const sorted = [...arr].sort((a, b) => a - b);

  const map = Object.create(null);

  let rank = 1;
  let curr = 0;
  while (curr < sorted.length) {
    if (!(sorted[curr] in map)) {
      map[sorted[curr]] = rank;
      rank++;
    }
    curr++;
  }

  return arr.map((el) => map[el]);
};