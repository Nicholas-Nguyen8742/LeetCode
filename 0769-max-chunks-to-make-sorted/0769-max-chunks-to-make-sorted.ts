function maxChunksToSorted(arr: number[]): number {
  let chunks = 0;
  let prefixSum = 0;
  let sortedPrefixSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    sortedPrefixSum += i;
    if (prefixSum === sortedPrefixSum) {
      chunks++;
    }
  }
  return chunks;
};