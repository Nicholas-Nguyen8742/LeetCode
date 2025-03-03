/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  let pivots = 0;
  const left = [], right = [];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (pivot === currentNum) {
      pivots++;
    } else if (currentNum < pivot) {
      left.push(currentNum);
    } else {
      right.push(currentNum);
    }
  }

  return left.concat(Array(pivots).fill(pivot)).concat(right);
};