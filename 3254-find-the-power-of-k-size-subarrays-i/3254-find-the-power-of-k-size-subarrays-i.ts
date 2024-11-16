function resultsArray(nums: number[], k: number): number[] {
  const length = nums.length;
  let result = new Array(length - k + 1).fill(0);
  
  for (let start = 0; start <= length - k; start++) {
    let isConsecutiveSorted = true;
    for (let j = start; j < start + k - 1; j++) {
      if (nums[j + 1] != nums[j] + 1) {
        isConsecutiveSorted = false;
        break;
      }
    }
    if (isConsecutiveSorted) {
      result[start] = nums[start + k - 1];
    } else {
      result[start] = -1;
    }
  }

  return result;
};