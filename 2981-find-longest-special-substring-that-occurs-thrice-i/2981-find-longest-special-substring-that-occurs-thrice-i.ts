function maximumLength(s: string): number {
  const count = new Map();

  for (let start = 0; start < s.length; start++) {
    const currString = [];

    for (let end = start; end < s.length; end++) {
      if (currString.length === 0 || currString[currString.length - 1] === s[end]) {
        currString.push(s[end]);
        const currToString = currString.join("");

        count.set(currToString, (count.get(currToString) || 0) + 1);
      } else {
        break;
      }
    }
  }

  let ans = -1;
  for (const [str, freq] of count.entries()) {
    if (freq >= 3 && str.length > ans) {
      ans = str.length;
    }
  }

  return ans;
};