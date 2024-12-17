function decodeString(s: string): string {
  const stack: [string, number][] = [];
  let resultString = '';
  let currentNumber = 0;

  for (const char of s) {
    if (!isNaN(parseInt(char))) {
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