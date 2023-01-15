/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const comb = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = comb.length;
    if (length % 2 === 0) {
        const midpoint = (length / 2) - 1;
        return (comb[midpoint] + comb[midpoint + 1]) / 2;
    }
    const index = (length / 2) - (1/2);
    return comb[index];
};