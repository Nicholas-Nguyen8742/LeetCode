function findTheDifference(s: string, t: string): string {
  for (let i = 0; i < t.length; i++) {
    if (!s.includes(t[i])) {
      return t[i];
    } else {
      s = s.replace(t[i], '');
    }
  }
};