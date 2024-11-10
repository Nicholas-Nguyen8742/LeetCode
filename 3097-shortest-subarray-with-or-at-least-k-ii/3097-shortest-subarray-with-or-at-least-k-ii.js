/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  let minLength = Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  let bitCounts = new Array(32).fill(0);

  while (windowEnd < nums.length) {
    updateBitCounts(bitCounts, nums[windowEnd], 1);

    while (windowStart <= windowEnd && convertBitsToNum(bitCounts) >= k) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      updateBitCounts(bitCounts, nums[windowStart], -1);
      windowStart += 1;
    }

    windowEnd += 1;
  }

  return minLength === Infinity ? -1 : minLength;
}

var updateBitCounts = function(bitCounts, number, delta) {
  for (let pos = 0; pos < 32; pos++) {
    if (number & (1 << pos)) {
      bitCounts[pos] += delta;
    }
  }
};

var convertBitsToNum = function(bitCounts) {
  let result = 0;
  for (let pos = 0; pos < 32; pos++) {
    if (bitCounts[pos] > 0) {
      result |= 1 << pos;
    }
  }
  return result;
};
