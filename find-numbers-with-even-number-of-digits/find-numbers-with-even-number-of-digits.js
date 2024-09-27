/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  return nums.filter((el) => getDigits(el) % 2 === 0).length;
};

var getDigits = function(num) {
  return num.toString().length;
}