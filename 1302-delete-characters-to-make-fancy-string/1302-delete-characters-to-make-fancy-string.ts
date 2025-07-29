function makeFancyString(s: string): string {
  let prev = s[0];
  let result = s[0];
  let consecutiveCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev) {
      consecutiveCount++;
    } else {
      prev = s[i];
      consecutiveCount = 1;
    }
    if (consecutiveCount < 3) {
      result += s[i];
    }
  }
  return result;
};