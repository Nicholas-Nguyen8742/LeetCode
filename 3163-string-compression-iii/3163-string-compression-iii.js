var compressedString = function(word) {
  let result = '';
  let currChar = word[0];
  let currCount = 1;
  let i = 1;
  let condition = word.length + 1;
  do {
    const char = word[i];
    if (char === currChar) {
      if (currCount === 9) {
        result += `${currCount}${currChar}`;
        currCount = 1;
      } else {
        currCount++;
      }
    } else {
     result += `${currCount}${currChar}`;

      currChar = char;
      currCount = 1; 
    }
    i++;
  } while (i < condition);

  return result;
};