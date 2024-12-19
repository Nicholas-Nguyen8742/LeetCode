/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const merged = [];

  for (let i = 0; i < nums.length; i++) {
    for (const num of nums[i]) {
      merged.push([num, i]);
    }
  }

  merged.sort((a, b) => a[0] - b[0]);

  const freq = new Map();
  let left = 0;
  let count = 0;
  let rangeStart = 0;
  let rangeEnd = Infinity;

  for (let right = 0; right < merged.length; right++) {
    const [num, listIndex] = merged[right];
    freq.set(listIndex, (freq.get(listIndex) || 0) + 1);

    if (freq.get(listIndex) === 1) {
      count++;
    }

    while (count === nums.length) {
      const currentRange = merged[right][0] - merged[left][0];
      if (currentRange < rangeEnd - rangeStart) {
        rangeStart = merged[left][0];
        rangeEnd = merged[right][0];
      }

      const [leftNum, leftListIndex] = merged[left];
      freq.set(leftListIndex, freq.get(leftListIndex) - 1);
      if (freq.get(leftListIndex) === 0) {
        count--;
      }
      left++;
    }
  }

  return [rangeStart, rangeEnd];
};