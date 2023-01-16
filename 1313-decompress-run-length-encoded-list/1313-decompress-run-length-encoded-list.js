/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let target = [];
  let i = 0;  
  while (i < nums.length / 2) {
    let arr = new Array(nums[i * 2]).fill(nums[i * 2 + 1]);
    target = target.concat(arr);
    i++;
  }
  return target;
};