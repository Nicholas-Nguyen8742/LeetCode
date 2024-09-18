/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const arrString = nums.map((num) => num.toString()).sort((a, b) => (b + a) - (a + b));
  if (arrString[0] === '0') {
    return '0';
  }

  return arrString.join('');
};