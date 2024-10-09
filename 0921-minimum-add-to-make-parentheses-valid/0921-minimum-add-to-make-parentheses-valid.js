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
  let i = 0;
  while (i < s.length) {   
    if (s[i] === '(') {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        count++;
      }
    }
    i++;
  }
  return count + open;
};