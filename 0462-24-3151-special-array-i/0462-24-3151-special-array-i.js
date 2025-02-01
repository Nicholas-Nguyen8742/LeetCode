/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  let prevParity = getParity(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const currParity = getParity(nums[i]);
    if (currParity === prevParity) {
      return false;
    }

    prevParity = currParity;
  }
  return true;
};

var getParity = function(num) {
  return num % 2 == 0 ? 0 : 1;
};