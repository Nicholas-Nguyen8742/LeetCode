/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let left = 1, right = Math.max(...nums);

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (isPossible(middle, nums, maxOperations)) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

var isPossible = function(maxCurrBalls, nums, maxOperations) {
  let total = 0;

  for (const num of nums) {
    total += Math.ceil(num / maxCurrBalls) - 1;
    if (total > maxOperations) {
      return false;
    }
  }
  return true;
};