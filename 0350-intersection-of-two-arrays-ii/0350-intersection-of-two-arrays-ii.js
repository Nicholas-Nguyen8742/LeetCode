/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const mapA = new Map();
    const mapB = new Map();
    nums1.map((el) => mapA.has(el) ? mapA.set(el, mapA.get(el) + 1) : mapA.set(el, 1));
    nums2.map((el) => mapB.has(el) ? mapB.set(el, mapB.get(el) + 1) : mapB.set(el, 1));
    let matches = [];
    for (let entry of mapA.keys()) {
        if (mapB.has(entry)) {
            const valueA = mapA.get(entry);
            const valueB = mapB.get(entry);
            if (valueA > 1 ) {
                let length = 0;
                valueA > valueB ? length = valueB : length = valueA;
                let start = 0;
                while (start < length) {
                matches.push(entry);
                start++;
                }
            } else matches.push(entry);
        }
    }
    return matches;
};