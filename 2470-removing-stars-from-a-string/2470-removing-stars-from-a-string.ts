function removeStars(s: string): string {
  const str = [];
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    if (char === '*') {
      str.pop();
    } else {
      str.push(char);
    }
    i++;
  }
  return str.join("");
};