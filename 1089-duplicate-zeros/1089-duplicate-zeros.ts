/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let originalLength = arr.length;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++;
    }
    i++;
  }
  
  arr.splice(originalLength, (i + 1) - originalLength);
};