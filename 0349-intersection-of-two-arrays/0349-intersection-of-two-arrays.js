/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setA = new Set(nums1);
    const setB = new Set(nums2);
    let intersectionResult = [];
    for (let i of setB) if (setA.has(i)) intersectionResult.push(i);
    return intersectionResult;
};