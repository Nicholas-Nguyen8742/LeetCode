function wordPattern(pattern: string, s: string): boolean {
  const arr = s.split(" ");
  if (pattern.length !== arr.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(pattern[i]) && !map.has(`value-${arr[i]}`)) {
      map.set(pattern[i], arr[i]);
      map.set(`value-${arr[i]}`, pattern[i]);
    }

    if (map.get(pattern[i]) !== arr[i] && pattern[i] !== map.get(`value-${arr[i]}`)) {
      return false;
    }
  }

  return true;
};