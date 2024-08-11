/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let result = new Array(2);

  for (let i = 1; i <= nums.length; i++) {
    const count = nums.filter((num) => num === i).length;
    if (count === 2) {
      result[0] = i;
    } else if (count === 0) {
      result[1] = i;
    }
    
    if (!result.includes(undefined)) {
      return result;
    }
  }

  return result;
};