function countOdds(low: number, high: number): number {
  return low & 1 ? Math.floor((high - low + 2) / 2) : Math.floor((high - low + 1) / 2);
};