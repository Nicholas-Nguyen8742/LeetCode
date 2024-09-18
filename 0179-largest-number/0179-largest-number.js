/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const arrString = nums.map(String).sort((a, b) => (b + a) - (a + b));
  return arrString[0] === '0' ? '0' : arrString.join('');
};