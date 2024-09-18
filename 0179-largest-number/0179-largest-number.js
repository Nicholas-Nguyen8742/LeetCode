/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const arrString = nums.map(String).sort(lambdaSort);
  return arrString[0] === '0' ? '0' : arrString.join('');
};

var lambdaSort = function(a, b) {
  return (b + a) - (a + b);
}