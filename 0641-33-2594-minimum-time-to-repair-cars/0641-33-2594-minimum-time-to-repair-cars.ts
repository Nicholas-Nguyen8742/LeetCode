function repairCars(ranks: number[], cars: number): number {
  let low = 1, high = cars * cars * ranks[0];

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    let repairedCars = 0;

    for (const rank of ranks) {
      repairedCars += Math.floor(Math.sqrt(Math.floor(mid / rank)));
    }

    if (repairedCars < cars) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};