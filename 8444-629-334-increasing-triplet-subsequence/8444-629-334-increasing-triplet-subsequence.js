/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let firstNum = Infinity, secondNum = Infinity;
  
  for (const currentNum of nums) {
    if (currentNum > secondNum && currentNum > firstNum) {
      return true;
    }
    if (currentNum > firstNum) {
      secondNum = currentNum;
    } else {
      firstNum = currentNum;
    }
  }
  return false;
};