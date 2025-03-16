function repairCars(ranks: number[], cars: number): number {
  let low = 1, high = cars * cars * ranks[0];

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    let repairedCars = 0;

    for (const rank of ranks) {
      repairedCars += Math.floor((Math.floor(mid / rank) ** 0.5));
    }

    if (repairedCars < cars) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};