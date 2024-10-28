function longestSquareStreak(nums: number[]): number {
  let streak = -1;
  const set = new Set(nums);

  let i = 0;
  while (i < nums.length) {
    let curr = nums[i];
    let length = 0;
    while (set.has(curr)) {   
      length++;
      curr = curr ** 2;
    }

    if (length > 1) {
      streak = Math.max(streak, length);      
    }
    i++;
  }

  return streak;
};