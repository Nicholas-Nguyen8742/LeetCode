function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }
  
  const result = Array.from({ length: numRows }, () => []);
  let rowIndex = 0;
  let reverse = false;

  for (let i = 0; i < s.length; i++) {
    result[rowIndex].push(s[i]);
    reverse ? rowIndex-- : rowIndex++;
    if (rowIndex === numRows - 1 || rowIndex === 0) {
      reverse = !reverse;
    }
  }

  let resultString = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (typeof result[i][j] === 'string') {
        resultString += result[i][j];
      }
    }
  }

  return resultString;
};