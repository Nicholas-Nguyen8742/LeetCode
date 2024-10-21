/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let count = 1;
  const set = new Set();
  
  function backtrack(str) {
    if (!set.has(str)) {
      set.add(str);
      count = Math.max(count, set.size);
      set.delete(str);
    }
    
    for (let i = 1; i < str.length; i++) {
      const subStr = str.substring(0, i);
      if (set.has(subStr)) continue;
      
      set.add(subStr);
      backtrack(str.substring(i));
      set.delete(subStr);
    }
  }
  backtrack(s);
  
  return count;
};