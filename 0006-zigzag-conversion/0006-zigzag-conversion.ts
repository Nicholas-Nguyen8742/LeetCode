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
    if (rowIndex === numRows - 1 || rowIndex === 0) reverse = !reverse;
  }

  return result.flat().join('');
};