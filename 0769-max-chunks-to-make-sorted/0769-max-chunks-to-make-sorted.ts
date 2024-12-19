function maxChunksToSorted(arr: number[]): number {
  let chunks = 0, max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max); if (max === i) chunks++;
  }
  return chunks;
};