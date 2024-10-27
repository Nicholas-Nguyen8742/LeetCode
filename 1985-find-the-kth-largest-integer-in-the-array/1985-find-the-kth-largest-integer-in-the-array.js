/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  const parsedNums = nums.sort((a, b) => BigInt(a) >= BigInt(b) ? 1 : -1);
  
  let i = 1;
  while (i < k) {
    parsedNums.pop();
    i++;
  }

  return `${parsedNums[parsedNums.length - 1]}`;
};