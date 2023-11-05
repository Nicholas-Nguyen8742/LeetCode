/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var filterArrayDiff = function(set1, set2) {
    const nums1 = Array.from(set1);
    return nums1.filter((el) => !set2.has(el));
}

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [filterArrayDiff(set1, set2), filterArrayDiff(set2, set1)];
};