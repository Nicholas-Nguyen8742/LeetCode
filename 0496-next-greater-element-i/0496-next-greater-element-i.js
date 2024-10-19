/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2, result = []) {
  if (nums1.length === 0) {
    return result;
  }

  const curr = nums1.pop();
  
  let foundIndex = nums2.findIndex((el) => el === curr);
  if (foundIndex === -1) {
    result.unshift(foundIndex);
    return nextGreaterElement(nums1, nums2, result);
  }

  const newN2 = nums2.slice(foundIndex + 1);
  foundIndex = newN2.findIndex((el) => el > curr);
  if (foundIndex === -1) {
    result.unshift(-1);
    return nextGreaterElement(nums1, nums2, result);
  }

  result.unshift(newN2[foundIndex]);

  return nextGreaterElement(nums1, nums2, result);
};