function arrayRankTransform(arr: number[]): number[] {
  const sorted = [...arr].sort((a, b) => a - b);

  const map = Object.create(null);

  let rank = 1;
  let curr = 0;
  while (curr < sorted.length) {
    const element = sorted[curr];
    if (element in map) {
      curr++;
      continue;
    }
    map[element] = rank;
    rank++;
    curr++;
  }

  return arr.map((el) => map[el]);
};