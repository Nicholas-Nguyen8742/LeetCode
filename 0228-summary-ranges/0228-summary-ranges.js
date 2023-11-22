/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let i = 1;
    let temp = [nums[0]];
    while (i <= nums.length) {
        if (temp.length && (temp[temp.length - 1] + 1 === nums[i])) {
            temp.push(nums[i]);
        } else {
            const val = temp.length === 1 ? `${temp[0]}` : `${temp[0]}->${temp[temp.length - 1]}`;
            res.push(val);
            temp = [];
            temp.push(nums[i]);
        }
        i++;
    }
  return res;
};