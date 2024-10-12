function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    let j = 0;
    while (j < nums2.length) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        count++;
      }
      j++;
    }
  }
  return count;
};