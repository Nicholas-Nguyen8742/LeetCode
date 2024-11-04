function replaceDigits(s: string): string {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      result += s[i];
    } else {
      result += String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i]));
    }
  }
  return result;
};