/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let temp = '';
    let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
        count++;
        temp = '';
    }
    temp += s[i];
  }

  return ++count;
};