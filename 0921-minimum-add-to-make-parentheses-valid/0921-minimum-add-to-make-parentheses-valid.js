/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  if (!s.length) {
    return 0; 
  }

  let open = 0;
  let count = 0;

  for (const char of s) {   
    if (char === '(') {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        count++;
      }
    }
  }
  return count + open;
};