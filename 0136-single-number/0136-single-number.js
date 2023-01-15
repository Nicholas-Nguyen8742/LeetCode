/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = nums.reduce((r, e) => (r[e] = (r[e] || 0) + 1, r), {});
    var uniq = Object.keys(obj).filter(e => obj[e] == 1).map(Number);
    return uniq;
};