function nextGreaterElement(nums1: number[], nums2: number[], result: number[] = []): number[] {
  if (nums1.length === 0) {
    return result;
  }

  const curr = nums1.shift();
  
  let foundIndex = nums2.findIndex((el) => el === curr);
  if (foundIndex === -1) {
    result.push(foundIndex);
    return nextGreaterElement(nums1, nums2, result);
  }

  const newN2 = nums2.slice(foundIndex + 1);
  foundIndex = newN2.findIndex((el) => el > curr);
  if (foundIndex === -1) {
    result.push(-1);
    return nextGreaterElement(nums1, nums2, result);
  }

  result.push(newN2[foundIndex]);

  return nextGreaterElement(nums1, nums2, result);
};