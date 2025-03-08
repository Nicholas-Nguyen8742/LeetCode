/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
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

      left++;
    }
  }

  return recolorsCount;
};