/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  const length = nums.length;

  function backtrack(f, c) {
    if (f === length) {
      result.push(c.slice());
      return;
    }

    c.push(nums[f]);
    backtrack(f + 1, c);

    c.pop();

    backtrack(f + 1, c);
  }
  backtrack(0, []);
  return result;
};