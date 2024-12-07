/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  let hash = {};
  for (const num of nums) {
    if (num in hash) {
      return num;
    }

    hash[num] = num;
  }

  return -1;
};