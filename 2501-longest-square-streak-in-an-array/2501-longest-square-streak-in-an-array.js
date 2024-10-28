/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  let streak = -1;
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let length = 0;
    while (set.has(curr)) {   
      length++;
      curr = curr ** 2;
    }
    
    if (length > 1) {
      streak = Math.max(streak, length);      
    }
  }

  return streak;
};