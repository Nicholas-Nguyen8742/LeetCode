/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  let count = 0;
  const n = nums.length;
  for (let i = 1; i < n - 1; i++) {
    const curr = nums[i];
    if (curr === nums[i - 1]) {
      continue;
    }

    let left = 0;
    for (let j = i - 1; j >= 0; j--) {
      const comparison = nums[j];
      if (comparison === curr) {
        continue;
      }
  
      if (comparison > curr) {
        left = 1;
        break;
      }
      
      if (comparison < curr) {
        left = -1;
        break;
      }
    }

    let right = 0;
    for (let j = i + 1; j < n; j++) {
      const comparison = nums[j];
      if (curr === comparison) {
        continue;
      }

      if (comparison > curr) {
        right = 1;
        break;
      }
      
      if (comparison < curr) {
        right = -1;
        break;
      }
    }

    if (left === right && left !== 0) {
      count++;
    }
  }

  return count;
};