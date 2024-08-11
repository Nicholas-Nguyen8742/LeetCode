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
  
  let i = 0;
  
  while (i < nums.length) {
    const rightArr = nums.slice(i);
    rightArr.shift();
    let leftSum = addSum(leftArr);
    let rightSum = addSum(rightArr);
    if (leftSum === rightSum) {
      left = i;
      break;
    }

    leftArr.push(nums[i]);
    i++;
  }
  
  
  return left;
};