/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    let foundIndex = nums2.findIndex((el) => el === nums1[i]);
    if (foundIndex === -1) {
      result.push(foundIndex);
      continue;
    }
    
    const newN2 = nums2.slice(foundIndex + 1);
    foundIndex = newN2.findIndex((el) => el > nums1[i]);
    if (foundIndex === -1) {
      result.push(-1);
      continue;
    }

    result.push(newN2[foundIndex]);
  }
  
  return result;
};