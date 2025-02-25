function numOfSubarrays(arr: number[]): number {
  let modulo =  10 ** 9 + 7
  let count = 0, prefixSum = 0, oddCount = 0, evenCount = 1;

  for (const num of arr) {
    prefixSum += num;

    if (prefixSum % 2 === 0) {
      count += oddCount;
      evenCount += 1;
    } else {
      count += evenCount;
      oddCount += 1;
    }

    count %= modulo;
  }
  return count;
};