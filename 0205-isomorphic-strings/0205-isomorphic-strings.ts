function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  const compareMap = new Map();
  
  
  for (let i = 0; i < s.length; i++) {
    const sVal = map.get(s[i]);
    const tVal = compareMap.get(t[i]);
    if (sVal != null || tVal != null) {
      if (sVal !== tVal) {
        return false;
      }
      continue;
    }
    
    map.set(s[i], i);
    compareMap.set(t[i], i);
  }
  return true;
};