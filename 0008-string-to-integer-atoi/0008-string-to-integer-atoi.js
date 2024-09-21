/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // 1) Ignore any leading whitespaces;
  const cleanString = s.trim();
  if (!cleanString.length) {
    return 0;
  }
  
  // 2) "-" = negative
  let prefix = "";
  let index = 0;
  
  if (["-", "+"].includes(cleanString[0])) {
    if (cleanString[0] === "-") {
      prefix = "-";
     }
    index = 1;
  }
  
  if (cleanString[index] == null) {
    return 0;
  }

  let result = "";
  
  function isDigit(char) {
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char);
  }
  
  function getResult(result) {
    if (-Math.pow(2, 31) > result) {
      return -Math.pow(2, 31);
    } else if (result > (Math.pow(2, 31)) - 1) {
      return Math.pow(2, 31) - 1;
    } else {
      return result;
    }
  }
  
  for (let i = index; i < cleanString.length; i++) {
    if (isDigit(cleanString[i])) {
      result =  result + cleanString[i];
    } else {
      if (result === "") {
        return 0;
      }
      return getResult(parseInt(prefix + result, 10));
    }
  }

  // Return if no other conditions met
  return getResult(parseInt(prefix + result, 10));
};