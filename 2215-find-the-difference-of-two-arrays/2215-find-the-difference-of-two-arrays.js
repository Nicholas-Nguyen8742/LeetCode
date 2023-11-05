/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var filterArrayDiff = function(nums1, nums2) {
    return Array.from(new Set(nums1.filter((el) => !nums2.includes(el))));
}

var findDifference = function(nums1, nums2) {
    return [filterArrayDiff(nums1, nums2), filterArrayDiff(nums2, nums1)];
};