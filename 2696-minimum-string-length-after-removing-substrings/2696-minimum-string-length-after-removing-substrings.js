/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  const stack = [];
  for (const char of s) {
    const prev = stack[stack.length - 1];
    if (char == 'B' && prev === 'A' || char == 'D' && prev === 'C') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length;
};