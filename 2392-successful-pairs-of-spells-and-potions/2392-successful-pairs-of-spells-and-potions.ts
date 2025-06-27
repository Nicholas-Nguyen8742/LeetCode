function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const result = new Array(spells.length).fill(0);

  const strengths = [];
  for (const potion of potions) {
    strengths.push(Math.ceil(success / potion));
  }

  strengths.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let l = 0, r = strengths.length - 1, successful = 0;
    while (l <= r) {
      const m = Math.floor((l+r) / 2);
      if (strengths[m] <= spells[i]) {
        l = m + 1;
        successful = l;
      } else {
        r = m - 1;
      }
    }

    result[i] = successful;
  }

  return result;
};