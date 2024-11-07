/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
  const n = nums.length;
  let values = [...nums];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (values[j] <= values[j + 1]) {
        continue;
      }
      if (
        values[j].toString(2).split("1").length - 1 ===
        values[j + 1].toString(2).split("1").length - 1
      ) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]];
      } else {
        return false;
      }
    }
  }
  return true;
};