/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let i = 1;
    let temp = [nums[0]];
    while (i <= nums.length) {
        const tempLength = temp.length;
        const curr = nums[i];
        if (tempLength && (temp[tempLength - 1] + 1 !== curr)) {
            const tempFirstEl = temp[0];
            const val = tempLength === 1 ? `${tempFirstEl}` : `${tempFirstEl}->${temp[tempLength - 1]}`;
            res.push(val);
            temp = [];
        }
        temp.push(curr);
        i++;
    }
  return res;
};