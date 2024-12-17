/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let resultString = '';
  let currentNumber = 0;

  for (const char of s) {
    if (!isNaN(char)) {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else if (char === '[') {
      stack.push([resultString, currentNumber]);
      resultString = '';
      currentNumber = 0;
    } else if (char === ']') {
      const [prevString, repeatTimes] = stack.pop();
      resultString = prevString + resultString.repeat(repeatTimes);
    } else {
      resultString += char;
    }
  }

  return resultString;
};