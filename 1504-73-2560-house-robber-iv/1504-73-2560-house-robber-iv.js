/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
  let minReward = 1;
  let maxReward = Math.max(...nums);
  const total = nums.length;

  while (minReward < maxReward) {
    const midReward = Math.floor((minReward + maxReward) / 2);

    let possible = 0, index = 0;
    while (index < total) {
      if (nums[index] <= midReward) {
        possible++;
        index += 2;
      } else {
        index++;
      }
    }

    if (possible >= k) {
      maxReward = midReward;
    } else {
      minReward = midReward + 1;
    }
  }

  return minReward;
};