function pivotArray(nums: number[], pivot: number): number[] {
  let pivots = 0;
  const left = [], right = [];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (pivot === currentNum) {
      pivots++;
      continue;
    }

    if (currentNum < pivot) {
      left.push(currentNum);
      continue;
    }
    
    right.push(currentNum);
  }

  return left.concat(Array(pivots).fill(pivot)).concat(right);
};