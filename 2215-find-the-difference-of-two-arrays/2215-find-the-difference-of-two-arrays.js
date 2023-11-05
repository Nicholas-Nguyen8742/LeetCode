/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var setToArr = function(set) {
    return Array.from(set);
}

var filterArrayDiff = function(set1, set2) {
    return setToArr(set1).filter((el) => !set2.has(el));
}

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [filterArrayDiff(set1, set2), filterArrayDiff(set2, set1)];
};