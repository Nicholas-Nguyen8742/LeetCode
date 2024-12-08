function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    Array.from(set1).filter((el) => !set2.has(el)),
    Array.from(set2).filter((el) => !set1.has(el)),
  ];
};