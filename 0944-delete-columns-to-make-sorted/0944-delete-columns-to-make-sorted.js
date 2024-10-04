/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let deleteCount = 0;
  
  for (let colIndex = 0; colIndex < strs[0].length; colIndex++) {
    for (let rowIndex = 0; rowIndex < strs.length - 1; rowIndex++) {
      if (strs[rowIndex].charAt(colIndex) > strs[rowIndex + 1].charAt(colIndex)) {
        deleteCount++;
        break;
      }
    }
  }  
  return deleteCount;
};