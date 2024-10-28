function longestSquareStreak(nums: number[]): number {
  let streak = -1;
  nums.sort((a, b) => Number(a) - Number(b));
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