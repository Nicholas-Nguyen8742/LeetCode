/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
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