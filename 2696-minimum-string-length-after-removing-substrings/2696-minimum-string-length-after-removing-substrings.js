/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = [];
  for (const char of s) {
    if (char == 'B' && stack[stack.length - 1] === 'A' || char == 'D' && stack[stack.length - 1] === 'C') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length;
};