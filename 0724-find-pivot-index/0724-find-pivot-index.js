/**
 * @param {number[]} nums
 * @return {number}
 */

var addSum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

var pivotIndex = function(nums) {
  let left = -1;
  const leftArr = [];
  
  for (let i = 0; i < nums.length; i++) {
    const rightArr = nums.slice(i);
    rightArr.shift();
    let leftSum = addSum(leftArr);
    let rightSum = addSum(rightArr);
    if (leftSum === rightSum) {
      return i;
    }

    leftArr.push(nums[i]);
  }
  
  return left;
};