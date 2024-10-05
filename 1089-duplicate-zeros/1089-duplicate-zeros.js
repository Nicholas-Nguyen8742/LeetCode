/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let originalLength = arr.length;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++;
    }
    i++;
  }
  
  const newLength = i + 1;
  arr.splice(originalLength, newLength - originalLength);
};