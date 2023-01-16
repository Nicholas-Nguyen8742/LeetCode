/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  return nums.map((el) => {
    let smaller = 0;
    nums.map((j) => { if (el > j) smaller++; });
    return smaller;
  });
};