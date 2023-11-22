/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let i = 1;
    let temp = [nums[0]];
    while (i <=nums.length) {
        if (i === 0) {
            temp.push(nums[i]);
        } else {
          if (temp.length && (temp[temp.length - 1] + 1 !== nums[i])) {
              if (temp.length === 1) {
                res.push(`${temp[0]}`);
              } else {
                res.push(`${temp[0]}->${temp[temp.length - 1]}`);
              }
              temp = [];
              temp.push(nums[i]);
          } else {
            temp.push(nums[i]);
          }
        }
        i++;
    }
  return res;
};