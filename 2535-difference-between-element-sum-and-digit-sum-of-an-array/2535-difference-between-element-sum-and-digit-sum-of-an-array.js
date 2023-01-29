/**
 * @param {number[]} nums
 * @return {number}
 */
function sumDigits(n) {
    if (n < 10) return n;
  const numArr = n.toString().split('');
  return numArr.reduce((a, b) => parseInt(a) + parseInt(b));
}
var differenceOfSum = function(nums) {
    let sumDig = 0;
    const sum = nums.reduce((acc, curr, index) => {
      (curr > 9) ? sumDig += sumDigits(curr) : sumDig += curr;
      return acc + curr;
    });
    return sum - (sumDig + sumDigits(nums[0]));
};