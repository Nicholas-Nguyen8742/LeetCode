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
        if (tempLength && (temp[tempLength - 1] + 1 !== nums[i])) {
            const val = tempLength === 1 ? `${temp[0]}` : `${temp[0]}->${temp[tempLength - 1]}`;
            res.push(val);
            temp = [];
        }
        temp.push(nums[i]);
        i++;
    }
  return res;
};