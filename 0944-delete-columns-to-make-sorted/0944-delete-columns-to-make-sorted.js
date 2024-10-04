/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let deleteCount = 0;
  
  for (let col = 0; col < strs[0].length; col++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i].charAt(col) > strs[i + 1].charAt(col)) {
        deleteCount++;
        break;
      }
    }
  }  
  return deleteCount;
};