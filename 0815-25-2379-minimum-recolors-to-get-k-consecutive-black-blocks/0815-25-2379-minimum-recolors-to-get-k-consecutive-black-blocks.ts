function minimumRecolors(blocks: string, k: number): number {
  let left = 0, whitesCount = 0, recolorsCount = Infinity;

  for (let right = 0; right < blocks.length; right++) {
    if (blocks[right] === "W") {
      whitesCount++;
    }

    if (right - left + 1 === k) {
      recolorsCount = Math.min(recolorsCount, whitesCount);

      if (blocks[left] === "W") {
        whitesCount--;
      }

      left += 1;
    }
  }

  return recolorsCount;
};