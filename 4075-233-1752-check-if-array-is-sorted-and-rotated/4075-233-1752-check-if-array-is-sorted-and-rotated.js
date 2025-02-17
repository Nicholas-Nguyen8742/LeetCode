/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let count = 0;
  const length = nums.length - 1;
  for (let i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
        count++;
    }
  }

  return !(count > 1 || (count === 1 && nums[0] < nums[length]));
};
