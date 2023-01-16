/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const target = [];
  nums.map((el, i) => target.splice(index[i], 0, nums[i]));
  return target;
};