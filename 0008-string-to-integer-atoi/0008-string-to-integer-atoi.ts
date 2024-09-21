function myAtoi(s: string): number {
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

  const getResult = (result) => Math.max(Math.min(result, Math.pow(2, 31) - 1), -Math.pow(2, 31));
  
  for (let i = index; i < cleanString.length; i++) {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(cleanString[i])) {
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