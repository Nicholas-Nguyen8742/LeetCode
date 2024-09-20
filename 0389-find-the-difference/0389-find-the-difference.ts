function findTheDifference(s: string, t: string): string {
  let i = 0;
  while (i < t.length) {
    if (!s.includes(t[i])) {
      return t[i];
    } else {
      s = s.replace(t[i], '');
    }
    i++;
  }
};