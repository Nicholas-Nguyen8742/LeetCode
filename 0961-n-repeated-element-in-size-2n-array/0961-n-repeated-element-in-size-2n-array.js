/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  let hash = {};
  for (const num of nums) {
    if (isNotNull(hash[num])) {
      return num;
    }

    hash[num] = num;
  }

  return -1;
};

var isNotNull = function(value) {
  return value != null;
};